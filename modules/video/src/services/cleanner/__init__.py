import os


class CleannerService:
    __temp_dir = ''

    def __cleannerFolder(self, dir):
        for file in os.listdir(dir):
            os.remove(os.path.join(dir, file))

    def clean(self):
        self.__cleannerFolder(self.__temp_dir)
