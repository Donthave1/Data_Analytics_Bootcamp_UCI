import numpy as np
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify

engine = create_engine("sqlite:///titanic.sqlite")

Base = automap_base()
base.prepare(engine, reflect=True)

Passenger = Base.classes.passenger 

session = Session(bind=engine)

app = Flask(__name__)

@app.route("/")
def welcome():
    return (
        f"Available Routes:<br />"
        f"/api/v1.0/names<br />"
        f"/api/v1.0/passangers"
    )

@app.route("/api/v1.0/names")
def names():
    results = session.query(Passenger.name).all()
    all_names = list(np.ravel(results))
    return jsonify(all_names)

@app.route("/api/v1.0/passangers")
def passangers():
    results = session.query(Passenger).all()
    all_passengers = []
    for passenger in results:
        passenger_dict = {}
        passenger_dict["name"] = passenger.name
        passenger_dict["age"] = passenger.age
        passenger_dict["sex"] = passenger.sex
        all_passengers.append(passenger_dict)
    
    return jsonify(all_passengers)

if __name__ == "__main__":
    app.run(debug=True)