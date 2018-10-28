from splinter import Browser
from bs4 import BeautifulSoup as bs
import datetime as dt

def init_browser():
# @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=True)

# Function to scrape news
def news_scrape():
    browser = init_browser()
    news = {}
    news_url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
    browser.visit(news_url)
    news_html = browser.html
    news_soup = bs(news_html, "lxml")
    news["title"] = news_soup.find("div", class_="content_title").get_text()
    return news

# Function to scrape images
def pics_scrape():
    browser = init_browser()
    pics = {}
    pics_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(pics_url)
    pics_html = browser.html
    # create a soup object from the html
    img_soup = bs(pics_html, "lxml")
    elem = img_soup.find("div", class_="img")
    featured_image_url = elem.find("img")["src"]
    # add our src to surf data with a key of src
    pics["src"] = featured_image_url
    return pics

# # Function to scrape images
# def news_scrape():
#     browser = init_browser()
#     news = {}
#     url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
#     browser.visit(url)
#     html = browser.html
#     soup = bs(html, "lxml")
#     news["title"] = soup.find("div", class_="content_title").get_text()
#     return news

# # Function to scrape images
# def news_scrape():
#     browser = init_browser()
#     news = {}
#     url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
#     browser.visit(url)
#     html = browser.html
#     soup = bs(html, "lxml")
#     news["title"] = soup.find("div", class_="content_title").get_text()
#     return news

# Function to find today's date
def today():
    return dt.date.today()