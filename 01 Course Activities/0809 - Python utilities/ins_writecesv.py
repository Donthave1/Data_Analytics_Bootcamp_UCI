import os, csv

output_path = os.path.join('..', 'output', 'new.csv')

with open(output_path, 'w', newline = '') as csv_file:
    csv_writer = csv.writer(csv_file, delimiter = ',')
    csv_writer.writerow(['First Name', 'Last Name', 'SSN'])
    csv_writer.writerow(['Bocodb', 'Low', '55555'])