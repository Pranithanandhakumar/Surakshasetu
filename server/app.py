
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/')
def home():
    return jsonify({"message": "Flask backend running!"})

@app.route('/submit', methods=['POST'])
def submit():
    data = request.get_json()
    name = data.get("name", "")
    return jsonify({"message": f"Hello, {name}! Data received successfully."})

if __name__ == '__main__':
    app.run(debug=True)
