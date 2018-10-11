from flask import Flask, jsonify

app = Flask(__name__)

hello_dict = {"Hello": "World"}

@app.route("/normal")
def normal():
    return jsonify(hello_dict)

if __name__ == "__main__":
    app.run(debug=True)
