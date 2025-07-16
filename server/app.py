from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/alerts")
def get_alerts():
    alerts = [
        {
            "region": "Kupwara, J&K",
            "type": "Border Firing",
            "message": "Cross-border firing reported near Keran sector. Stay indoors.",
            "timestamp": "2025-07-14 19:45"
        }
    ]
    return jsonify(alerts)

if __name__ == "__main__":
    app.run(debug=True)
