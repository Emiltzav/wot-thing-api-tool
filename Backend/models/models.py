from pydantic import BaseModel, ConfigDict
from typing import List
from typing import Literal

class SingleMessage(BaseModel):
    messageID:str
    model_config = ConfigDict(extra='allow')


class MessagesPerTopic(BaseModel):
    topic: str
    messages: List[SingleMessage]
    

class UserInput(BaseModel):
    messages:List[MessagesPerTopic]
    protocol: Literal['MQTT', 'KAFKA']