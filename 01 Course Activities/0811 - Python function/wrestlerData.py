import os
import csv

# Path to collect data from the Resources folder
wrestling_CSV = os.path.join('..', 'Resources', 'WWE-Data-2016.csv')

# Define the function and have it accept the 'wrestlerData' as its sole parameter
def get_percentages(wrestling_data):
    wrestler = {
        "name": wrestling_data[0]
    }
    # Find the total number of matches wrestled
    wrestler["total_matches"] = int(wrestling_data[1]) + int(wrestling_data[2]) + int(wrestling_data[3])

    # Find the percentage of matches won
    wrestler["win_percentage"] = calculate_percentage(int(wrestling_data[1]), wrestler["total_matches"])

    # Find the percentage of matches lost
    wrestler["loss_percentage"] = calculate_percentage(int(wrestling_data[2]), wrestler["total_matches"])

    # Find the percentage of matches drawn
    wrestler["draw_percentage"] = calculate_percentage(int(wrestling_data[3]), wrestler["total_matches"])

    if(wrestler["loss_percentage"] > 50):
        wrestler["type_of_wrestler"] = "Jobber"
    else:
        wrestler["type_of_wrestler"] = "SuperStar"
    report_stats(wrestler)

# Print out the wrestler's name and their percentage stats
def report_stats(wrestler):
    print(f"Stats for {wrestler['name']}")
    print(f"WIN PERCENT: {wrestler['win_percentage']}")
    print(f"LOSS PERCENT: {wrestler['loss_percentage']}")
    print(f"DRAW PERCENT: {wrestler['draw_percentage']}")
    print(f"{wrestler['name']} is a {wrestler['type_of_wrestler']}")

def calculate_percentage(number, total):
    return (number / total) * 100

# Read in the CSV file
with open(wrestling_CSV, 'r') as csvfile:

    # Split the data on commas
    csvreader = csv.reader(csvfile, delimiter=',')

    # Prompt the user for what wrestler they would like to search for
    name_to_check = input("What wrestler do you want to look for? ")

    # Loop through the data
    for row in csvreader:

        # If the wrestler's name in a row is equal to that which the user input, run the 'getPercentages()' function
        if(name_to_check == row[0]):
            get_percentages(row)