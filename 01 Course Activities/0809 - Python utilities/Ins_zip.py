import os, csv

indexes = [1,2,3,4]
departments = ["Boss", "Sales", "Sales", "HR"]
employees = ["Michael", "Dwight", "Meredith", "Kelly"]

roster = zip(indexes, employees, departments)

output_path = os.path.join('output.csv')

with open(output_path, 'w') as data_file:
    writer = csv.writer(data_file)
    writer.writerow(['Index', 'Employee', 'Department']) #this only take in one list
    writer.writerows(roster) #this line take in 'many' list
 
