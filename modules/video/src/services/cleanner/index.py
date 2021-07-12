import os


class CleannerService:
    __default_dir = "/home/python/video"
    __temp_dir = "temp"
    __dist_dir = "dist"
    __format_image = 'jpeg'

    def __cleannerFolder(self, dir, format):
        for file in os.listdir(dir):
            if format in file:
                os.remove(os.path.join(dir, file))

    def cleanImages(self):
        self.__cleannerFolder(
            f"{self.__default_dir}/{self.__temp_dir}", self.__format_image)
        self.__cleannerFolder(
            f"{self.__default_dir}/{self.__dist_dir}", self.__format_image)
