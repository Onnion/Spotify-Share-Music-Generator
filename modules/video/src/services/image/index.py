import requests
import time
import ffmpeg
import numpy

from colorthief import ColorThief
from PIL import Image


class ImageService:
    __width = 1080
    __height = 1920

    def __get_gradient_2d(self, start, stop, width, height, is_horizontal):
        if is_horizontal:
            return numpy.tile(numpy.linspace(start, stop, width), (height, 1))
        else:
            return numpy.tile(numpy.linspace(start, stop, height), (width, 1)).T

    def __get_gradient_3d(self, width, height, start_list, stop_list, is_horizontal_list):
        result = numpy.zeros(
            (height, width, len(start_list)), dtype=numpy.float)
        for i, (start, stop, is_horizontal) in enumerate(zip(start_list, stop_list, is_horizontal_list)):
            result[:, :, i] = self.__get_gradient_2d(
                start, stop, width, height, is_horizontal)
        return result

    def __getPath(self, dest="temp", type="jpeg", name_file= ""):
        timestamp = time.time()
        name = name_file if name_file != "" else f"image_{timestamp}"
        return f"/home/python/video/{dest}/{name}.{type}"

    def __getColors(self, image_path):
        color_thief = ColorThief(image_path)
        colors = color_thief.get_palette(quality=1, color_count=6)

        return colors

    def __createTempImage(self, image_url):
        dest = self.__getPath()
        image = requests.get(image_url, allow_redirects=True)
        open(dest, 'wb').write(image.content)

        return dest

    def __createGradientImage(self, image_path):
        dest = self.__getPath()
        colors = self.__getColors(image_path)
        array = self.__get_gradient_3d(self.__width, self.__height, colors[0],
                                       colors[1], (True, False, False))
        Image.fromarray(numpy.uint8(array)).save(dest, quality=95)

        return dest

    def __createImage(self, gradient_path, thumb_path):
        dest = self.__getPath('dist')
        gradient = Image.open(gradient_path)
        thumb = Image.open(thumb_path)
        img_w, img_h = thumb.size
        bg_w, bg_h = gradient.size
        offset = ((bg_w - img_w) // 2, (bg_h - img_h) // 2)

        gradient.paste(thumb, offset)
        gradient.save(dest)

        return dest

    def createVideo(self, image, audio, name):
        dest = self.__getPath('dist', 'mp4', name)
        image_path = self.__createTempImage(image)
        image_gradient_path = self.__createGradientImage(image_path)
        image = self.__createImage(image_gradient_path, image_path)

        video = ffmpeg.input(image, pattern_type='glob', framerate=25)
        audio = ffmpeg.input(audio).audio.filter('atrim', duration=15)

        out = ffmpeg.output(video, audio, dest, vcodec='copy',
                            acodec='aac', strict='experimental')

        ffmpeg.run(out)
