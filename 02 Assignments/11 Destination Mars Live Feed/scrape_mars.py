from splinter import Browser
from bs4 import BeautifulSoup as bs
import datetime as dt
import pandas as pd


def init_browser():
# @NOTE: Replace the path with your actual path to the chromedriver
    executable_path = {"executable_path": "/usr/local/bin/chromedriver"}
    return Browser("chrome", **executable_path, headless=True)

# Function to scrape news
def scrape():
    browser = init_browser()
    data = {}

    # Scraping Mars news
    news_url = "https://mars.nasa.gov/news/?page=0&per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest"
    browser.visit(news_url)
    news_html = browser.html
    news_soup = bs(news_html, "lxml")
    data["title"] = news_soup.find("div", class_="content_title").get_text()
    data["content"] = news_soup.find("div", class_="article_teaser_body").get_text()

    # Scraping NASA Mars' image
    pics_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(pics_url)
    pics_html = browser.html
    pics_soup = bs(pics_html, "lxml")
    elem = pics_soup.find(class_="articles")
    featured_image_url = "https://www.jpl.nasa.gov/" + elem.find("a")["data-fancybox-href"]
    featured_thumbnail_url = "https://www.jpl.nasa.gov/" + elem.find("a")["data-thumbnail"]
    data["pics"] = featured_image_url
    data["thumbnail"] = featured_thumbnail_url
    
    # Scaping Twitter Mars' tweets
    twt_url = "https://twitter.com/marswxreport?lang=en"
    browser.visit(twt_url)
    twt_html = browser.html
    twt_soup = bs(twt_html, "lxml")
    data["tweet"] = twt_soup.find("p", class_="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text").get_text()

    # Scaping Mars' Facts
    facts_url = "https://space-facts.com/mars/"
    browser.visit(facts_url)
    facts_html = browser.html
    table_df = pd.read_html(facts_html)[0]
    facts_df = table_df.rename(columns = {
        0:"Facts",
        1:"Values"
    })
    # Parse html table
    data["facts"] = facts_df.to_html()

    # Scraping Cerberus Hemisphere Image
    weather_url1 = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(weather_url1)
    browser.click_link_by_partial_text("Cerberus Hemisphere Enhanced")
    cerb_html = browser.html
    cerb_soup = bs(cerb_html, "lxml")
    download_cerb = cerb_soup.find("div", class_="downloads")
    data["cerb"] = download_cerb.find("a")["href"]
    data["cerb_title"] = cerb_soup.find("h2", class_="title").get_text()

    # Scraping Schiaparelli Hemisphere Image
    weather_url2 = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(weather_url2)
    browser.click_link_by_partial_text("Schiaparelli Hemisphere Enhanced")
    schi_html = browser.html
    schi_soup = bs(schi_html, "lxml")
    download_schi = schi_soup.find("div", class_="downloads")
    data["schi"] = download_schi.find("a")["href"]
    data["schi_title"] = schi_soup.find("h2", class_="title").get_text()

    # Scraping Syrtis Major Hemisphere Image
    weather_url3 = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(weather_url3)
    browser.click_link_by_partial_text("Syrtis Major Hemisphere Enhanced")
    syrt_html = browser.html
    syrt_soup = bs(syrt_html, "lxml")
    download_syrt = syrt_soup.find("div", class_="downloads")
    data["syrt"] = download_syrt.find("a")["href"]
    data["syrt_title"] = syrt_soup.find("h2", class_="title").get_text()

    # Scraping Valles Marineris Hemisphere Image
    weather_url4 = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(weather_url4)
    browser.click_link_by_partial_text("Valles Marineris Hemisphere Enhanced")
    vall_html = browser.html
    vall_soup = bs(vall_html, "lxml")
    download_vall = vall_soup.find("div", class_="downloads")
    data["vall"] = download_vall.find("a")["href"]
    data["vall_title"] = vall_soup.find("h2", class_="title").get_text()


    return data


# Function to find today's date
def today():
    return dt.date.today()