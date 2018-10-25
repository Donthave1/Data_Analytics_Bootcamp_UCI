from flask import Flask, render_template
import pymongo

app = Flask(__name__)

# @TODO: setup mongo connection
conn = 'mongodb://localhost:27017'

# @TODO: connect to mongo db and collection
client = pymongo.MongoClient(conn)

db = client.store_inventory

db.store_inventory.drop()

@app.route('/')
def index():
    # @TODO: write a statement that finds all the items in the db and sets it to a variable
    item = list(db.store_inventory.find())
    print(item)

    # @TODO: render an index.html template and pass it the data you retrieved from the database
    return render_template('index.html', item=item)


if __name__ == "__main__":
    app.run(debug=True)
