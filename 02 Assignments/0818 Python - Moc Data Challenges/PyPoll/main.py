#start by import the package we need
import os, csv

#define resources path
csv_path = os.path.join("..", "..", "..", "Resources", "election_data.csv")

#make csv file an iteratable object
with open(csv_path, newline="", encoding="UTF-8") as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=",")
    #parse header
    next(csv_reader)
    #create candidate list and vote list
    candidate_list = []
    unique_candidate_list = []
    total_vote = 0
    vote_list = []
    for row in csv_reader:
        #find total votes
        total_vote += 1
        #compile a list of all candidate
        candidate_list.append(row[2])
        
        
    print(candidate_list)
    print(total_vote)