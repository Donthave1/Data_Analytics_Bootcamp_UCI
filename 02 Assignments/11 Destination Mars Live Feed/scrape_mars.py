from splinter import Browser
from bs4 import BeautifulSoup as bs
import datetime as dt
import pandas as pd


# Function to find today's date
def today():
    return dt.date.today()
    
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
        0:"Description",
        1:"Value"
    })
    facts_df.set_index("Description", inplace=True)
    # Parse html table
    data["facts"] = facts_df.to_html()

    # Scraping Hemisphere
    base_url = "https://astrogeology.usgs.gov"
    full_url = f"{base_url}/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(full_url)
    home_html = browser.html
    home_soup = bs(home_html, "lxml")
    all_tags = home_soup.find_all("div", class_="item")
    hemisphere_image_urls = []
    # scraped all page links
    for tag in all_tags:
        item_link = tag.find("a", "itemLink")
        item_href = item_link["href"]
        
        # applied scraped links and soup to visit the page to grab titles and images
        browser.visit(f"{base_url}{item_href}")
        hemi_html = browser.html
        hemi_soup = bs(hemi_html, "lxml")
        img_title = hemi_soup.find("h2", class_="title").get_text()
        img_download = hemi_soup.find("div", class_="downloads")
        img_url = img_download.find("a")["href"]
        
        hemisphere_image_urls.append({
                    "title": img_title,
                    "img_url": img_url
                })
    data["hemispheres"] = hemisphere_image_urls

    return data

