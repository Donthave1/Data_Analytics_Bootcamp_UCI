import pymongo

# @TODO: setup mongo connection
conn = 'mongodb://localhost:27017'

# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)

db = client.store_inventory
collection = db.produce

db.collection.insert_many(
    [
        {
            'type': 'apples',
            'cost': .23,
            'stock': 333
        },
        {
            'type': 'orange',
            'cost': .15,
            'stock': 444
        },
        {
            'type': 'organ',
            'cost': 450000,
            'stock': 5
        },
        {
            'type': 'pig brain',
            'cost': 9,
            'stock': 60
        },
        {
            'type': 'newspaper',
            'cost': .10,
            'stock': 777
        },
    ]
)