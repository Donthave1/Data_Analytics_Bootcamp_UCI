from flask import Flask, jsonify

justice_league_members = [
    {"superhero": "Aquaman", "real_name": "Arthur Curry"},
    {"superhero": "Batman", "real_name": "Bruce Wayne"},
    {"superhero": "Cyborg", "real_name": "Victor Stone"},
    {"superhero": "Flash", "real_name": "Barry Allen"},
    {"superhero": "Green Lantern", "real_name": "Hal Jordan"},
    {"superhero": "Superman", "real_name": "Clark Kent/Kal-El"},
    {"superhero": "Wonder Woman", "real_name": "Princess Diana"}
]

#################################################
# Flask Setup
#################################################
app = Flask(__name__)


#################################################
# Flask Routes
#################################################

@app.route("/")
def welcome():
    return (
        f"Welcome to the Justice League API:<br />"
        f"Real Name Routes:<br />"
        f"/api/v1.0/justice-league<br />"
        f"/api/v1.0/justice-league/Arthur%20Curry<br />"
        f"/api/v1.0/justice-league/Bruce%20Wayne<br />"
        f"/api/v1.0/justice-league/Victor%20Stone<br />"
        f"/api/v1.0/justice-league/Barry%20Allen<br />"
        f"/api/v1.0/justice-league/Hal%20Jordan<br />"
        f"/api/v1.0/justice-league/Clark%20Ken/Kal-El<br />"
        f"/api/v1.0/justice-league/Princess%20Diana<br />"
        f"Super Hero Name Routes:<br />"
        f"/api/v1.0/justice-league/hero/aquaman<br />"
        f"/api/v1.0/justice-league/hero/batman<br />"
        f"/api/v1.0/justice-league/hero/cyborg<br />"
        f"/api/v1.0/justice-league/hero/flash<br />"
        f"/api/v1.0/justice-league/hero/green%20lantern<br />"
        f"/api/v1.0/justice-league/hero/superman<br />"
        f"/api/v1.0/justice-league/hero/wonder%20woman<br />"
    )

@app.route("/api/v1.0/justice-league")
def justice_league():
    return jsonify(justice_league_members)


@app.route("/api/v1.0/justice-league/real-name/<real_name>")
def character_real_name(real_name):
     
    canonicalized = sanitize(real_name)
    
    result = find_character(canonicalized, "real_name")

    if result:
        return result

    return jsonify({"error": f"Character with the real name {real_name} was not found"}), 404

@app.route("/api/v1.0/justice-league/superhero/<superhero>")
def character_superhero(superhero):
     
    canonicalized = sanitize(superhero)
    
    result = find_character(canonicalized, "superhero")

    if result:
        return result

    return jsonify({"error": f"Character with the superhero {superhero} was not found"}), 404

def sanitize(term):
    return term.replace(" ", "").lower()

def find_character(term, key):
    for character in justice_league_members:
        search_term = sanitize(character[key])

        if search_term == term:
            return jsonify(character)

if __name__ == "__main__":
    app.run(debug=True)

