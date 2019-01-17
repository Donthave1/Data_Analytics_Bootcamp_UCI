<<<<<<< HEAD
from mrjob.job import MRJob


class Hot_Days(MRJob):

    def mapper(self, _, line):
        (station, name, state, date, snow, tmax, tmin) = line.split(",")
        if tmax and int(tmax) >= 100:
            yield name, 1

    def reducer(self, name, hot):
        yield name, sum(hot)


if __name__ == "__main__":
    Hot_Days.run()
||||||| merged common ancestors
=======
from mrjob.job import MRJob

class Hot_Days(MRJob):
    def mapper(self, _, line):
        (station, name, state, date, snow, tmax, tmin) = line.split(",")
        if tmax and int(tmax) >= 100:
            yield name, 1

    def reducer(self, name, hot):
        yield name, sum(hot)


if __name__ == "__main__":
    Hot_Days.run()
>>>>>>> 63b6d669a1323dd29a0b094d8c1da598dc30adf7
