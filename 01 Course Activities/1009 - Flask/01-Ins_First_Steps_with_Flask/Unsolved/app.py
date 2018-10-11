from flask import Flask

app = Flask(__name__)

@app.route("/")
def home():
    print("Server received request for 'Home' page")
    return "testing!"

@app.route("/about")
def about():
    print("Server received request for 'About' page")
    return "Welcome to my about page"
    
if __name__ == "__main__":
    app.run(debug=True)