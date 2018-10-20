import pymongo
connection_string = "mongodb://localhost:27017"
client = pymongo.MongoClient(connection_string)

db = client.classDB

classroom = db.classroom.find()


db.classroom.insert_one({
    "name": "Bryan Lowe",
    "row": 3,
    "favoriteLibrary": "Pandas", 
    "hobbies": ["Game", "PC Games", "Console Games"]
})

db.classroom.update_one(
    {"name": "Bryan Lowe"},
    {
        "$set": {
            "row": 4
        }
    }
)

for student in classroom:
    print(student)