# Hawaii Trip Weather Analysis

## Objective
Use Python and SQLAlchemy to do basic climate analysis and data exploration of given Hawaii climate database. All of the following analysis should be completed using SQLAlchemy ORM queries, Pandas, and Matplotlib.


## Approach
Tools:

* Python - SQLAlchemy, Matplotlib, Pandas, Numpy, , DateTime, 

### Part I
Use Python to read into MySQL database using SQLAlchemy. Selecting a certain period of the time percipitation data to predict if a future trip date will be suitable for vacation.  
So I use MySQL queries in Python via SQLAlchemy to collect information needed, then plot it using Matplotlib. Below are percipitation data graphs of chosen timeline:

- A year worth of percipitation data
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/09%20Hawaii%20Trip%20Weather%20Analysis/Images/hawaii_prcp_data.png "One Year Percipitation")

- Most active observation station collected data
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/09%20Hawaii%20Trip%20Weather%20Analysis/Images/most_active_station_hist.png "most active station")

- Trip Average Temperature 
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/09%20Hawaii%20Trip%20Weather%20Analysis/Images/trip_avg_temp.png "trip average temp")

- Trip dates time period histogram
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/09%20Hawaii%20Trip%20Weather%20Analysis/Images/trip_normals.png "Normal histogram analysis")

### Part II

Design a Flask API based on the queries develop on part I. Running local host to dispay graphs. For last two pages of taking user input dates, I had also build in error handle script so page would Not break if user input dates that is out of data set range.
Please refer to the code in app.py.