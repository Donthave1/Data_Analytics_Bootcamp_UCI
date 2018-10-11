from flask import Flask

app = Flask(__name__)

@app.route("/")

def home():
    print("Server received request for 'Home' page")
    return "Hello, world!"


@app.route("/about")
def about():
    print("Server received request for 'About' page")
    return "I am Ed, and I am currently in class"

@app.route("/contact")
def contact():
    print("Server received request for 'Contract' page")
    return "Please do not send any junk mail to me"

if __name__ == "__main__":
    app.run(debug=True)