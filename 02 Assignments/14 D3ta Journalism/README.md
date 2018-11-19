# D3ta Jouranlist

![alt text](https://media.giphy.com/media/v2xIous7mnEYg/giphy.gif "Banner")

## Objective
A given task to create data visualization for a major metro paper. With the chart I created for analyzing the current trends shaping people's lives, as well as creating charts, graphs, and interactive elements to help readers understand your findings.


* JavaScript, D3.js, d3-tip.js, HTML, CSS, Boostrap

### Please use the following link to final product:
[D3ta Jouranlism](https://donthave1.github.io/D3ta-journalism/)


![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/14%20D3ta%20Journalism/assets/images/2-census.jpg "source page") We were given data from United States Census Bureau. First I have to get rid of unncessary value that was a typo in the csv file. 
Then validate the excel format to make sure value that we are using is clean.  
![alt text] (https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/14%20D3ta%20Journalism/assets/images/6-excel.jpg "excel snipt") 


I created a scatter plot between six data variables such as Healthcare vs. Poverty or Smokers vs. Age, etc.
Using the D3 techniques to represents each state with circle elements. All data are pull from [data.csv](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/14%20D3ta%20Journalism/assets/data/data.csv) by using the d3.csv function. 


Both axes on the left and bottom of the chart are animated as when viewers click on the labels to decide which data to display.
Include state abbreviations in each circles.  
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/14%20D3ta%20Journalism/assets/images/7-animated-scatter.gif "animation demo")


I also incorporate d3-tip.js plugin developed by [Justin Palmer](https://github.com/Caged) that allow the graph to reveal sepecific element's data when viwer hovers their cursor over the scatter dots.
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/14%20D3ta%20Journalism/assets/images/8-tooltip.gif "tooltips")
