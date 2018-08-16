import os, csv

video = input("What show or movie are you looking for? ")
found = False
csv_path = os.path.join('..', 'Resources', 'netflix_ratings.csv')

with open(csv_path, newline='', encoding='UTF-8') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=',')

    for row in csv_reader:
        if(row[0] == video):
            print(row[0] + " is rated " + row[1] + " with a rating of " + row[5])
            found = True
            break
    
    if(found == False):
        print("Sorry we don't have that")