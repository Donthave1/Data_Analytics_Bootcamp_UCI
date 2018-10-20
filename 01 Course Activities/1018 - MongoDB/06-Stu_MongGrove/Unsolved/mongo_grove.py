import pymongo
import datetime

conn = 'mongodb://localhost:27017'
client = pymongo.MongoClient(conn)

db = client.fruits_db

collection = db.fruits_db

vendor = input("Vendor name: ")
fruit_type = input("Type of fruit: ")
quantity = input("Number of boxes received: ")
ripeness = input("Ripeness of the fruit (1 is unripe, 2 is ripe, 3 is over-ripe): ")

post = {
    "vendor": vendor,
    "fruit": fruit_type,
    "quantity": quantity,
    "ripeness rating": ripeness,
    "date": datetime.datetime.utcnow()
}

collection.insert_one(post)