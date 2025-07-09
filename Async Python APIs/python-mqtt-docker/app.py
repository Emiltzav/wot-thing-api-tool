from flask import Flask, render_template
from publisher import publish_measurements
import paho.mqtt.client as mqtt
import time

app = Flask(__name__)

@app.route('/')
def home(): 
    # Render the index.html page when visiting the root
    return render_template('index.html')

@app.route('/publish', methods=['POST']) 
def publish_measurements():
    # HiveMQ server details
    BROKER = "172.16.0.10" #hivemq
    PORT = 1883
    TOPIC = "test/topic"
    client = mqtt.Client()
    client.connect(BROKER, PORT, 60)
    for i in range(60):
        message = f"Measurement {i+1}"
        client.publish(TOPIC, message)
        print(f"Published: {message}")
        time.sleep(1)
    client.disconnect()
    return "Published all measurements successfully!"

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=5000)
