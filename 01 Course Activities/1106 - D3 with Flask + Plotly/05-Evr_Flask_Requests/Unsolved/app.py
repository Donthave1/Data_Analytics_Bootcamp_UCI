# import necessary libraries
from flask import (
    Flask,
    render_template,
    jsonify,
    request)


app = Flask(__name__)

my_data = []

@app.route("/")
def home():
    return "Welcome!"

@app.route("/api/data")
def data():
    return jsonify(my_data)

@app.route("/send", methods=["GET", "POST"])
def send():
    if request.method == "POST":
        nickname = request.form["nickname"]
        age = request.form["age"]
        form_data = {
            "nickname": nickname,
            "age": age
        }

        my_data.append(form_data)

        return "Thanks for your information!"

    return render_template("form.html")

if __name__ == "__main__":
    app.run(debug=True)
