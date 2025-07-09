from fastapi import APIRouter
import json
from . import responses as r
from ..models import models as m
from typing import List
import subprocess
import threading
import traceback
import queue
from . import responses
router = APIRouter()

@router.get("/version")
def CurrentVersion():
    return r.currentVersion 

@router.post('/messages/create')
def CreateMessages(usrInput:m.UserInput):
     
    try:
        if usrInput.protocol == "KAFKA":
            CreateKafkaMessages(usrInput.messages)
            messageQueue = queue.Queue()
            dockerStart = threading.Thread (target=KAFKADockerStart, args=(messageQueue,) )
            dockerStart.start()
            dockerStart.join() 
            res = messageQueue.get()
            print("Error Message:")
            print(res)
            return {
                "error":"false",
                "protocol":"KAFKA",
                "msg": "Messages created successfully",
                "url":{
                    "send":responses.kafkaURLs["send"],
                    "receive":responses.kafkaURLs["receive"]
                }
            }
        else:
            """ Not ready yet"""
            if usrInput.protocol == "MQTT":
                CreateMQTTMessages(usrInput.messages)
                return {
                    "error":"false",
                    "protocol":"MQTT",
                    "msg": "Messages created successfully",
                    "url":{
                        "send":"endpoint",
                        "receive":"message viewer"
                    }
                }
    except Exception : 
        return {
            "error":"true", 
            "protocol": usrInput.protocol,
            "msg":"Error at message creation" 
        }
    



# ==================================================== Helper Functions ====================================================

def CreateKafkaMessages(data:List[m.MessagesPerTopic]):
    
    try:
        with open("config.json", "r") as f:
            conf = json.load(f)
            KAFKA_MESSAGES_PATH  = conf["KAFKA_MESSAGES_PATH"]
            KAFKA_ROUTES_PATH = conf["KAFKA_ROUTES_PATH"]
    except Exception as e:
        traceback.print_exc()
    messagesImportStatement = (
        f"from pydantic import BaseModel\n"
        f"from typing import List"
    )

    routesHeader = (
        f"import json\n"
        f"from app.core.gateways.kafka import Kafka\n"
        f"from app.core.models.userDefinedMessages import *\n"
        f"from app.dependencies.kafka import get_kafka_instance\n"
        f"from fastapi import APIRouter, Depends\n"
        f"router = APIRouter()\n"
    )

    routesBody = ""
    messagesBody = ""+messagesImportStatement+"\n\n"
     
    for item in data:
        
        for msg in item.messages:
            msg.messageID = msg.messageID.replace(" ", "_")
            item.topic = item.topic.replace(" ", "_")
            msgModel = item.topic+"_"+msg.messageID 
            messagesBody += ClassGenerator( msg, msgModel)
            routesBody += (
                f"@router.post(\"/{item.topic}/{msg.messageID}\")\n"
                f"async def send(data: {msgModel}, server: Kafka = Depends(get_kafka_instance)):\n"
                f"    try:\n"
                f"        topic_name =\"{item.topic}\"\n"
                f"        await server.aioproducer.send_and_wait(topic_name, json.dumps(data.dict()).encode(\"ascii\"))\n"
                f"    except Exception as e:\n"
                f"        await server.aioproducer.stop()\n"
                f"        raise e\n"
                f"    return {{\"message\": \"Message sent successfully\"}}\n\n\n\n\n\n\n"
            )
    routesBody = routesHeader+"\n\n" + routesBody
    
    try:
        
        with open(KAFKA_MESSAGES_PATH, "w") as f:
            f.write(messagesBody)
 
        with open(KAFKA_ROUTES_PATH, "w") as f:
            f.write(routesBody)
    except Exception as e:
         
        raise e 
    


def CreateMQTTMessages(data:List[m.MessagesPerTopic]):
    pass


"""
    Generate a Model class for the message for KAFKA
"""
def ClassGenerator(msg:m.SingleMessage, className:str):
    classString = f"class {className}(BaseModel):\n"
     
    for key, value in  msg.dict().items():
        if key == "messageID":
            continue
        classString += f"    {key}:{value}\n"
    classString+="\n\n\n"
    return classString


"""
    Create a subprocess to start the docker containers
"""
def KAFKADockerStart(messageQueue:queue.Queue): 
    try:
        with open('config.json', 'r') as f:
            KAFKA_DOCKER_COMPOSE_PATH  = json.load(f)["KAFKA_DOCKER_COMPOSE_PATH"]
            # Create a subprocess with stdout and stderr redirected to pipes
            command = f"docker-compose -f \"{KAFKA_DOCKER_COMPOSE_PATH}\" up --build -d"
            process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
            # Read and print the output of the subprocess
            stdout, stderr = process.communicate() 
            if stderr: 
                messageQueue.put(stderr.decode()) 
    except Exception as e:
        print("Docker(Exception Error): "+e)
        