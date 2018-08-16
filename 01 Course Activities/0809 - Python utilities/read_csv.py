import os
import csv

csvpath = os.path.join('..', 'Resources', 'accounting.csv')

with open(csvpath, newline='', encoding="UTF-8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')
    next(csv_reader)

    for row in csv_reader:
        print(row)
