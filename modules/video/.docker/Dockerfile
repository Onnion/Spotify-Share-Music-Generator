FROM python:3.8

WORKDIR /home/python/video

RUN apt update
RUN yes | apt-get install ffmpeg

CMD ["tail", "-f", "/dev/null"]