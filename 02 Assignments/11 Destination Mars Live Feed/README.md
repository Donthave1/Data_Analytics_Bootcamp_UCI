# Destination: Mars Live Feed 

## Objective
In this assignment, I will build a web application that scrapes various websites for data related to the Mission to Mars and displays the information in a single HTML page. 

## Approach
Tools:

* Python - Flask, PyMongo, BeautifulSoup, Splinter, Requests, MongoDB, HTML, CSS, Boostrap 

First, I utilized the convenience of Jupyter Notebook to be able to test section of codes on-the-fly to see if my scraping code is returning the information I need. By using Splinter, and BeautifulSoup to collect certain tag values in target pages. This part of code can be found in [mission_to_mars.ipynb](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/mission_to_mars.ipynb).  
For this assignment, the chosen Mars elements to display are News, Images, Weather Condition, Facts, and Hemispheres pictures.

Source websites:

* [NASA Mars News](https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest)
* [JPL Mars Space Images](https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars)
* [Mars Weather Twitter](https://twitter.com/marswxreport?lang=en)
* [SPACE Fact - Mars](https://space-facts.com/mars/)
* [USGS Astrogeology Mars Hemispheres](https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars)

Second, once the scraping codes worked with the the result I want. I convert it to pthon file to create function to be able to tie it with MongoDB using PyMongo library and Flask. This part of code can be found in [app.py](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/app.py) & [scrape_mars.py](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/scrape_mars.py).  

Finally, to display visualization I created a [landing page](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/templates/index.html) and which lead to a [result page](https://github.com/Donthave1/Data_Analytics_Bootcamp_UCI/blob/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/templates/result.html). Please see below for end result.

![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/Archive/Screen%20Shot%202018-10-30%20at%207.06.01%20AM.png "final 1")
![alt text](https://raw.githubusercontent.com/Donthave1/Data_Analytics_Bootcamp_UCI/master/02%20Assignments/11%20Destination%20Mars%20Live%20Feed/Archive/Screen%20Shot%202018-10-30%20at%207.06.21%20AM.png "final 2")