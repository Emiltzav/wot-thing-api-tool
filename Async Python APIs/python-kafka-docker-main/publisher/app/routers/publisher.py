import json
from app.core.gateways.kafka import Kafka
from app.core.models.userDefinedMessages import *
from app.dependencies.kafka import get_kafka_instance
from fastapi import APIRouter, Depends
router = APIRouter()


@router.post("/Topic1/Message1")
async def send(data: Topic1_Message1, server: Kafka = Depends(get_kafka_instance)):
    try:
        topic_name ="Topic1"
        await server.aioproducer.send_and_wait(topic_name, json.dumps(data.dict()).encode("ascii"))
    except Exception as e:
        await server.aioproducer.stop()
        raise e
    return {"message": "Message sent successfully"}






@router.post("/Topic2/Message2")
async def send(data: Topic2_Message2, server: Kafka = Depends(get_kafka_instance)):
    try:
        topic_name ="Topic2"
        await server.aioproducer.send_and_wait(topic_name, json.dumps(data.dict()).encode("ascii"))
    except Exception as e:
        await server.aioproducer.stop()
        raise e
    return {"message": "Message sent successfully"}






