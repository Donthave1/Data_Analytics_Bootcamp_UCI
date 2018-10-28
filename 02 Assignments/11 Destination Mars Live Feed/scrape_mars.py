from splinter import Browser
from bs4 import BeautifulSoup as bs
import datetime as dt
import time

def init_browser():
# @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=True)

# Function to scrape news
def scrape():
    browser = init_browser()
    data = {}
    news_url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
    browser.visit(news_url)
    news_html = browser.html
    news_soup = bs(news_html, "lxml")
    data["title"] = news_soup.find("div", class_="content_title").get_text()
    data["content"] = news_soup.find("div", class_="article_teaser_body").get_text()

    pics_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(pics_url)
    pics_html = browser.html
    pics_soup = bs(pics_html, "lxml")
    elem = pics_soup.find(class_="articles")
    featured_image_url = "https://www.jpl.nasa.gov/" + elem.find("a")["data-fancybox-href"]
    featured_thumbnail_url = "https://www.jpl.nasa.gov/" + elem.find("a")["data-thumbnail"]
    data["pics"] = featured_image_url
    data["thumbnail"] = featured_thumbnail_url

    twt_url = "https://twitter.com/marswxreport?lang=en"
    browser.visit(twt_url)
    twt_html = browser.html
    twt_soup = bs(twt_html, "lxml")
    data["tweet"] = twt_soup.find("p", class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").get_text()

    # weather_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    # browser.visit(weather_url)
    # weather_html = browser.html
    # weather_soup = bs(weather_html, "lxml")
    # hemi_list = weather_soup.find("div", id="product-section")
    # pic_links = hemi_list.find("a")["href"]
    # cerberus_link = "https://astrogeology.usgs.gov" + pic_links
    # browser.visit(cerberus_link)
    # cerb_html = browser.html
    # cerb_soup = bs(cerb_html, "lxml")
    # download_cerb = cerb_soup.find("div", class_="downloads")
    # data["cerb"] = download_cerb.find("a")["href"]
    # data["cerb_title"] = download_cerb.find("h2", class_="title").get_text()

    weather_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(weather_url)

    # Moving through pages
    time.sleep(5)
    browser.click_link_by_partial_text('Cerberus Hemisphere Enhanced')
    time.sleep(5)

    # Create BeautifulSoup object; parse with 'html.parser'
    cerb_html = browser.html
    cerb_soup = bs(cerb_html, "lxml")
    download_cerb = cerb_soup.find("div", class_="downloads")
    data["cerb"] = download_cerb.find("a")["href"]
    data["cerb_title"] = download_cerb.find("h2", class_="title").get_text()


    return data


# Function to find today's date
def today():
    return dt.date.today()