import paho.mqtt.client as mqtt
import time

# HiveMQ server details
BROKER = "172.16.0.10" #hivemq
PORT = 1883
TOPIC = "test/topic"

def publish_measurements():
    # Initialize MQTT client
    client = mqtt.Client()
    client.connect(BROKER, PORT, 60)

    # Publish messages
    for i in range(60):
        message = f"Measurement {i+1}"
        client.publish(TOPIC, message)
        print(f"Published: {message}")

    # Disconnect
    client.disconnect()
    print("Publisher disconnected.")