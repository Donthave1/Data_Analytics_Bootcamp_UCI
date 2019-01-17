<<<<<<< HEAD
from mrjob.job import MRJob

class Bacon_counter(MRJob):
    def mapper(self, _, line):
        for word in line.split():
            if word.lower() == "bacon":
                yield "bacon", 1

    def reducer(self, key, values):
        yield key, sum(values)

if __name__ == "__main__":
    Bacon_counter.run()
||||||| merged common ancestors
=======
from mrjob.job import MRJob

class Bacon_counter(MRJob):
    def mapper(self, _, line):
        for word in line.split():
            if word.lower() == "bacon":
                yield "bacon", 1

    def reducer(self, key, values):
        yield key, sum(values)


if __name__ == "__main__":
    Bacon_counter.run()
>>>>>>> 63b6d669a1323dd29a0b094d8c1da598dc30adf7
