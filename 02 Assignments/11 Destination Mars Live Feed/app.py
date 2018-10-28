from flask import Flask, render_template, redirect
from flask_pymongo import PyMongo
import scrape_mars

app = Flask(__name__)
scraped_date = scrape_mars.today()

# Use flask_pymongo to set up mongo connection
mongo = PyMongo(app, uri="mongodb://localhost:27017/mars_app")

@app.route("/")
def index():
    mars_news = mongo.db.mars_news.find_one()
    mars_pics = mongo.db.mars_pics.find_one()
    return render_template("index.html", mars_news=mars_news, mars_pics=mars_pics, scraped_date=scraped_date)

# Scrape for News
@app.route("/news")
def news_scraper():
    mars_news = mongo.db.mars_news
    mars_news_data = scrape_mars.news_scrape()
    mars_news.update({}, mars_news_data, upsert=True)

# Scrape for Images
@app.route("/images")
def pics_scraper():
    mars_pics = mongo.db.mars_pics
    mars_pics_data = scrape_mars.pics_scrape()
    mars_pics.update({}, mars_pics_data, upsert=True)

# # Scrape for Weathers
# mars_news = mongo.db.mars_news
# mars_news_data = scrape_mars.scrape()
# mars_news.update({}, mars_news_data, upsert=True)
# # Scrape for Facts
# mars_news = mongo.db.mars_news
# mars_news_data = scrape_mars.scrape()
# mars_news.update({}, mars_news_data, upsert=True)
# return redirect("/", code=302)

if __name__ == "__main__":
    app.run(debug=True)