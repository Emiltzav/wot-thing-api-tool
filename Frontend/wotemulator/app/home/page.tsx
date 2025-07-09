/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import App from "next/app";
import Image from 'next/image';
import React, { ChangeEvent, useEffect, useState } from "react";
import { json } from "stream/consumers";
import { DataFetch } from "../api/apiCommunicator";


interface Message {
    topic: string;
    messages: unknown[];
}

interface AppData {
    messages: Message[];
    protocol: string;
}
export default function Home() {
    const [appState, setAppState] = useState<AppData>(
        {
            messages: [],
            protocol: "KAFKA"
        }
    );


    return (

        <div className="flex  flex-col  items-center justify-center h-screen  w-screen   bg-slate-600 space-y-2 ">
            <MainContainer appState={appState} setAppState={setAppState} />
        </div>);

}



interface AppProps {
    appState: AppData;
    setAppState: React.Dispatch<React.SetStateAction<AppData>>;
}
function MainContainer(props: AppProps) {
    const [topicCount, setTopicCount] = useState(0);
    const topics: React.ReactNode[] = [];

    // Button Handler
    const addHandler = () => {
        // Copy app state
        // eslint-disable-next-line prefer-const
        let appStateCopy = { ...props.appState };

        // Append a new topic with empty messages
        appStateCopy.messages.push(
            {
                topic: "Default Topic " + topicCount.toString(),
                messages: []
            }
        )
        // Error checking
        if (typeof props.setAppState !== "function") {
            return;
        }
        // Set component state (just a simple topic counter)
        setTopicCount(topicCount + 1);
        // Set app state
        props.setAppState(appStateCopy);

    }

    // For every topic generate a TopicContainer
    if (typeof props.appState === "object" && props.appState !== null) {

        // Loop through each topic and create a TopicContainer
        for (let i = 0; i < props.appState.messages.length; i++) {
            topics.push(<TopicContainer
                key={props.appState.messages[i]["topic"]}
                appState={props.appState}
                setAppState={props.setAppState}
                topicID={props.appState.messages[i]["topic"]} />
            );
        }
    }

    const SendRequest = async () => {
        // Generate Thing Description
        const asyncapiTD = {
            asyncapi: "3.0.0",
            info: {
                title: "Emulated Device",
                version: "1.0"
            },
            servers: {
                main_server: {
                    host: "host:9092",
                    protocol: "kafka"
                }
            },
            channels: {
                properties_resource_channel: {
                    messages: {

                    } as { [key: string]: unknown }
                }
            },
            operations: {
                properties_resource_operation: {
                    action: "send",
                    channel: {
                        $ref: "#/channels/properties_resource_channel"
                    },
                    messages: [

                    ] as { [key: string]: unknown }[]
                }
            },
            components: {
                schemas: {

                } as { [key: string]: unknown },
                messages: {

                } as { [key: string]: unknown }
            }
        }

        const jsonSchemaType = new Map<string, string>(
            [
                ["str", "string"],
                ["bytes", "string"],
                ["bytes", "string"],
                ["bytes", "string"],
                ["int", "number"],
                ["float", "number"],
                ["bool", "boolean"],
                ["dict", "object"],
                ["List[str]", "array;string"],
                ["List[bytes]", "array;string"],
                ["List[int]", "array;number"],
                ["List[float]", "array;number"],
                ["List[bool]", "array;boolean"],
                ["List[dict]", "array;object"]
            ]
        )

        if (typeof props.appState.messages !== "undefined") {
            //Loop topic
            for (let i = 0; i < props.appState.messages.length; i++) {
                const selectedTopic = props.appState.messages[i]
                // Loop Topic Messages
                for (let j = 0; j < selectedTopic.messages.length; j++) {
                    const selectedMsg = selectedTopic.messages[j] as { messageID: string, [key: string]: string }
                    const msgID = selectedMsg["messageID"]
                    const payload: {
                        type: string;
                        properties: { [key: string]: { type: string, items?: { type: string } } };
                    } = {
                        type: "object",
                        properties: {}
                    }
                    // Loop message fields
                    for (const key in selectedMsg) {
                        if (key === "messageID") continue
                        const fieldID = key
                        const fieldTypeCode = jsonSchemaType.get(selectedMsg[key])
                        if (typeof fieldTypeCode !== "undefined") {
                            const fieldType = fieldTypeCode.split(";");
                            if (fieldType.length > 1) {
                                payload.properties[fieldID] = {
                                    type: "array",
                                    items: {
                                        type: fieldType[1]
                                    }
                                }
                            }
                            else {
                                payload.properties[fieldID] = {
                                    type: fieldType[0]
                                }
                            }
                        }
                    }
                    asyncapiTD.components.schemas[msgID + "_payload"] = payload
                    asyncapiTD.components.messages[msgID] = {
                        payload: {
                            $ref: "#/components/schemas/" + msgID + "_payload"
                        }
                    }
                    asyncapiTD.channels.properties_resource_channel.messages[msgID] = {
                        $ref: "#/components/messages/" + msgID
                    }
                    asyncapiTD.operations.properties_resource_operation.messages.push(
                        {
                            $ref: "#/channels/properties_resource_channel/messages/" + msgID
                        }
                    )
                }
            }

        }

        const tdAsJson = JSON.stringify(asyncapiTD, null, 2)
        const blob = new Blob([tdAsJson], { type: 'application/json' })
        const href = URL.createObjectURL(blob);

        const link = document.createElement('a')
        link.href = href;
        link.download = "EmulatedDeviceTD.json"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(href)
        const res = await DataFetch(props.appState)
        if (res.error === "true") {
            alert(res.msg)

        }
        else {
            const activeAppData = JSON.stringify(props.appState);
            const encodedData = encodeURIComponent(activeAppData);
            window.open('/kafka?data=' + encodedData, '_blank', 'noopener, noreferrer');
        }
    }

    return (
        <div className="flex flex-col overflow-y-scroll  w-1/3 space-y-2 bg-orange-200 rounded-md p-2">
            <div className="flex flex-col  space-y-2 w-full">
                {topics}
            </div>
            <ProtocolContainer appState={props.appState} setAppState={props.setAppState} />
            <div className="flex flex-row  justify-end w-full">
                <button className="btn btn-active btn-primary   " onClick={addHandler}>Add Topic</button>
            </div>
            <div>
                <button className="btn btn-active btn-primary  " onClick={SendRequest}>Send</button>
            </div>
        </div>
    );
}



interface TopicContainerProps extends AppProps {
    topicID: string;
}
function TopicContainer(props: TopicContainerProps) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTopicID, setActiveTopicID] = useState<string>(props.topicID); // The topicID that is currently active (used for search and assign operations)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTopicID, setCurrentTopicID] = useState<string>(props.topicID); // The new topicID that will replace the active one 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [generatedMessages, setGeneratedMessages] = useState<number>(0); // Count user generated messages

    // Message Display
    // eslint-disable-next-line prefer-const
    let displayMessages: React.ReactNode[] = [];
    for (let i = 0; i < props.appState.messages.length; i++) {
        if (props.appState.messages[i]["topic"] === activeTopicID) {
            if ('messages' in props.appState.messages[i]) {
                const topicMessages = props.appState.messages[i].messages;
                for (let j = 0; j < topicMessages.length; j++) {
                    displayMessages.push(<SingleMessage key={(topicMessages[j] as { messageID: string })['messageID']} messageID={(topicMessages[j] as { messageID: string })['messageID']} appState={props.appState} setAppState={props.setAppState} topicID={activeTopicID} />);
                }
                break;
            }
        }
    }

    // ============================== Handlers ==============================
    const topicChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentTopicID(event.target.value);
    }

    const saveHandler = () => {
        // check empty
        if (currentTopicID.trim().length === 0) {
            alert("Topic cannot be empty");
            return
        }
        setActiveTopicID(currentTopicID);
        // eslint-disable-next-line prefer-const
        let appStateCopy = { ...props.appState };
        for (let i = 0; i < appStateCopy.messages.length; i++) {
            if (appStateCopy.messages[i]["topic"] === activeTopicID) {
                appStateCopy.messages[i]["topic"] = currentTopicID;

                // Error checking
                if (typeof props.setAppState !== "function") {
                    return;
                }
                props.setAppState(appStateCopy);
            }
        }
    }

    const addMessageHandler = () => {
        const appStateCopy = { ...props.appState }

        for (let i = 0; i < appStateCopy.messages.length; i++) {
            if (appStateCopy.messages[i]["topic"] === activeTopicID) {
                if ('messages' in appStateCopy.messages[i]) {
                    appStateCopy.messages[i]['messages'].push(
                        { "messageID": activeTopicID + "_MessageID_" + generatedMessages.toString() }
                    )
                    // Component state
                    setGeneratedMessages(generatedMessages + 1)
                    if (typeof props.setAppState === 'function') {
                        props.setAppState(appStateCopy)
                    }
                    break;
                }
            }
        }
    }

    const deleteTopic = () => {
        const appStateCopy = { ...props.appState }
        appStateCopy['messages'] = appStateCopy['messages'].filter(
            (item) => item['topic'] !== activeTopicID
        )

        if (typeof props.setAppState === 'function') {
            props.setAppState(appStateCopy);
        }
    }
    // ============================== Handlers ==============================


    return (
        <div className="flex flex-col  space-x-2   border-2 border-gray-500 rounded-md p-2">
            <div className="flex flex-row  space-x-2 items-center">
                <label>Topic:</label>
                <input onChange={topicChangeHandler} type="text" value={currentTopicID} className="input input-bordered w-full max-w-xs bg-white" />
                <button className="btn btn-active btn-success " onClick={saveHandler}>Save</button>
                <button className="btn btn-active btn-error " onClick={deleteTopic}>Delete</button>
            </div>
            <br />
            <div className="flex flex-col items-start  space-y-2 w-full">
                <div className="grid grid-cols-2 gap-4 w-full items-center justify-between">
                    <div>
                        <label>Messages:</label>
                    </div>
                    <div className="justify-self-end pr-2">
                        <button className="btn btn-active btn-primary   " onClick={addMessageHandler}>Add</button>
                    </div>
                </div>
                <div className="w-full flex flex-col space-y-4">
                    {displayMessages}
                </div>
            </div>
        </div>
    )
}

interface SingleMessageProps extends AppProps {
    topicID: string;
    messageID: string;
}
// Represents a single message
function SingleMessage(props: SingleMessageProps) {
    const [activeMessageID, setActiveMessageID] = useState(props.messageID);
    const [currentMessageID, setCurrentMessageID] = useState(props.messageID);
    const [fieldCount, setFieldCount] = useState<number>(0)

    // Load message fields
    const displayFields: React.ReactNode[] = [];
    for (const msg of props.appState['messages']) {
        if (msg['topic'] === props.topicID) {
            for (let i = 0; i < msg['messages'].length; i++) {
                const currentMessage = (msg['messages'][i] as { messageID: string })
                if (currentMessage['messageID'] === activeMessageID) {
                    let counter = 0;
                    for (const [key, value] of Object.entries(currentMessage)) {
                        if (key === 'messageID') continue
                        displayFields.push(
                            <MessageField
                                key={props.topicID + "_" + props.messageID + "_" + key + "_" + counter.toString()}
                                topicID={props.topicID}
                                messageID={props.messageID}
                                fieldID={key}
                                currentType={value}
                                appState={props.appState}
                                setAppState={props.setAppState}
                            />
                        )
                        counter++
                    }
                }
            }
            break
        }
    }


    // Set the message id
    const changeMessageID = (event: ChangeEvent<HTMLInputElement>) => {

        setCurrentMessageID(event.target.value)
    }

    /**
     *  Create a new field for the current message
     */
    const appendMessageField = () => {
        const appStateCopy = { ...props.appState }
        const DEFAULT_FIELD_ID = "Default_field_ID_" + fieldCount.toString()
        const DEFAULT_FIELD_TYPE = "str"

        for (const msg of appStateCopy['messages']) {
            if (msg['topic'] === props.topicID) {
                for (let i = 0; i < msg['messages'].length; i++) {
                    const currentMessage = (msg['messages'][i] as { messageID: string, [key: string]: string })
                    if (currentMessage['messageID'] === activeMessageID) {
                        currentMessage[DEFAULT_FIELD_ID] = DEFAULT_FIELD_TYPE;
                        break
                    }
                }
                break
            }
        }

        if (typeof props.setAppState === 'function') {
            props.setAppState(appStateCopy)
        }
        setFieldCount(fieldCount + 1)
    }
    /**
     *  Delete a message with all its fields
     */
    const deleteMsg = () => {
        const appStateCopy = { ...props.appState }
        const newMessagesArray: unknown[] = []
        // Loop all messages
        for (let i = 0; i < appStateCopy.messages.length; i++) {
            // Topic Match
            if (appStateCopy.messages[i].topic === props.topicID) {
                const selectedTopic: number = i; // Save index of topic
                // Loop all topic messages
                for (let msgIndx = 0; msgIndx < appStateCopy.messages[selectedTopic].messages.length; msgIndx++) {
                    if ((appStateCopy.messages[selectedTopic].messages[msgIndx] as { messageID: string })['messageID'] !== activeMessageID) {
                        // If not the current message save
                        newMessagesArray.push(
                            appStateCopy.messages[selectedTopic].messages[msgIndx]
                        )
                    }
                }
                // Update topic messages array
                appStateCopy.messages[selectedTopic].messages = [...newMessagesArray]
                // Update app state
                if (typeof props.setAppState === 'function') {
                    props.setAppState(appStateCopy)
                }
                break
            }
        }
    }

    const saveMsg = () => {
        const appStateCopy: AppData = { ...props.appState }
        // Update app state
        for (const msg of appStateCopy['messages']) {
            if (msg['topic'] === props.topicID) {
                for (const singleMsg of msg['messages']) {
                    if ((singleMsg as { messageID: string })['messageID'] === activeMessageID) {
                        (singleMsg as { messageID: string })['messageID'] = currentMessageID;
                    }
                }
            }
        }
        props.setAppState(appStateCopy)
    }

    return (
        <div id='SingleMessageContainer' className="flex flex-col w-full  ">
            <div id='messageIDContainer' className="flex flex-row space-x-2 w-full items-center pr-1">
                <label>MessageID:</label>
                <input type="text" value={currentMessageID} className="input input-bordered w-full max-w-xs bg-white input-sm" onChange={changeMessageID} />
                <button className="btn btn-active btn-success   " onClick={saveMsg}>Save</button>
                <button className="btn btn-active btn-error   " onClick={deleteMsg}>Delete</button>
            </div>
            <div id='fieldContainer' className="flex flex-col">
                {displayFields}
            </div>
            <div className="flex flex-row justify-end w-full pr-1">
                <button onClick={appendMessageField}>
                    <Image
                        src="/add.png" // Path to the image in the public folder
                        alt="Button Icon"
                        width={20} // Adjust width as needed
                        height={20} // Adjust height as needed
                    />
                </button>
            </div>
        </div>
    )
}

interface MessageFieldProps extends SingleMessageProps {
    fieldID: string,
    currentType: string
}

function MessageField(props: MessageFieldProps) {
    const [activeFieldID, setActiveFieldID] = useState(props.fieldID)
    const [currentFieldID, setCurrentFieldID] = useState(props.fieldID)
    const [fieldType, setFieldType] = useState(props.currentType)

    const AvailableFieldTypes: { [key: string]: string } = {
        strType: "str",
        floatType: "float",
        intType: "int",
        boolType: "bool",
        bytesType: "bytes",
        objectType: "dict",
        strList: "List[str]",
        floatList: "List[float]",
        intList: "List[int]",
        boolList: "List[bool]",
        bytesList: "List[bytes]",
        objectList: "List[dict]"
    }



    // Generate options for the select element
    const typeOptions: React.ReactNode[] = [];
    for (const key in AvailableFieldTypes) {
        typeOptions.push(<option key={key} value={AvailableFieldTypes[key]}>{AvailableFieldTypes[key]}</option>);
    }


    const fieldIDHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentFieldID(event.target.value)

    }

    const fieldTypeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const appStateCopy = ChangeFieldType(props.appState, props.topicID, props.messageID, activeFieldID, event.target.value)
        props.setAppState(appStateCopy)
        setFieldType(event.target.value)
    }

    const deleteField = () => {
        const appStateCopy = DeleteField(props.appState, props.topicID, props.messageID, activeFieldID)
        props.setAppState(appStateCopy)
    }

    const saveID = () => {
        const appStateCopy = ChangeFieldID(props.appState, props.topicID, props.messageID, activeFieldID, currentFieldID)
        props.setAppState(appStateCopy)
        setActiveFieldID(currentFieldID)
        alert("New Field ID: " + currentFieldID)
    }


    return (
        <div className="flex flex-row  w-full space-y-5 space-x-2 items-baseline">
            <div>
                <input type="text" value={currentFieldID} className="input input-bordered w-full max-w-xs bg-white" onChange={fieldIDHandler} />
            </div>
            <div>
                <select className="select w-full max-w-xs bg-white" value={fieldType} onChange={fieldTypeHandler}>
                    {typeOptions}
                </select>
            </div>
            <div>
                <button className="btn btn-active btn-success   " onClick={saveID}>Save </button>
            </div>
            <div>
                <button className="btn btn-active btn-error   " onClick={deleteField}>Delete</button>
            </div>
        </div>
    )
}

/**
 *  Display a dropdown selection about the protocol.
 */
function ProtocolContainer(props: AppProps) {
    const [selectedProtocol, setSelectedProtocol] = useState(props.appState.protocol);
    const AvailableProtocols: { [key: string]: string } = {
        KAFKA: "KAFKA",
        MQTT: "MQTT",
    }

    // Generate option element for every available protocol
    const protocolOptions: React.ReactNode[] = [];
    for (const protocol in AvailableProtocols) {
        protocolOptions.push(<option key={protocol} value={protocol}>{protocol}</option>);
    }

    const protocolChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        // eslint-disable-next-line prefer-const
        let appStateCopy = { ...props.appState };
        appStateCopy.protocol = event.target.value;
        setSelectedProtocol(event.target.value);
        // Error checking
        if (typeof props.setAppState !== "function") {
            return;
        }
        props.setAppState(appStateCopy);
    }
    return (
        <div className="flex flex-row items-center space-x-2">
            <label>Protocol:</label>
            <select className="select w-full max-w-xs bg-white" value={selectedProtocol} onChange={protocolChangeHandler}>
                {protocolOptions}
            </select>

        </div>
    );
}

// ******************************** Helper Functions ********************************

function ChangeFieldID(appData: AppData, topicID: string, messageID: string, currentFieldID: string, newFieldID: string): AppData {
    const appDataCopy = { ...appData };

    for (let i = 0; i < appDataCopy.messages.length; i++) {
        const selectedMsg = appDataCopy.messages[i] // array of messages
        if (selectedMsg.topic === topicID) {
            for (let topicMessageIndex = 0; topicMessageIndex < selectedMsg.messages.length; topicMessageIndex++) {
                const topicMsg = selectedMsg.messages[topicMessageIndex] as { messageID: string, [key: string]: string }
                if (topicMsg.messageID === messageID) {
                    // Copy this message fields to another with the new field ID. Then replace the old field with the new
                    const temp: { messageID: string, [key: string]: string } = { messageID: topicMsg.messageID };
                    for (const field in topicMsg) {
                        if (field === currentFieldID) {
                            temp[newFieldID] = topicMsg[currentFieldID]
                        }
                        else {
                            temp[field] = topicMsg[field]
                        }
                    }
                    appDataCopy.messages[i].messages[topicMessageIndex] = temp;
                }
            }
        }
    }
    return appDataCopy;
}

function ChangeFieldType(appData: AppData, topicID: string, messageID: string, fieldID: string, fieldType: string): AppData {
    const appDataCopy = { ...appData };

    for (let i = 0; i < appDataCopy.messages.length; i++) {
        if (appDataCopy.messages[i].topic === topicID) {
            for (let topicMessageIndex = 0; topicMessageIndex < appDataCopy.messages[i].messages.length; topicMessageIndex++) {
                if ((appDataCopy.messages[i].messages[topicMessageIndex] as { [key: string]: string }).messageID === messageID) {
                    (appDataCopy.messages[i].messages[topicMessageIndex] as { [key: string]: string })[fieldID] = fieldType
                }
            }
        }
    }
    return appDataCopy;
}

function DeleteField(appData: AppData, topicID: string, messageID: string, fieldID: string): AppData {

    const appDataCopy = { ...appData };

    for (let i = 0; i < appDataCopy.messages.length; i++) {
        const selectedMsg = appDataCopy.messages[i] // array of messages
        if (selectedMsg.topic === topicID) {
            for (let topicMessageIndex = 0; topicMessageIndex < selectedMsg.messages.length; topicMessageIndex++) {
                const topicMsg = selectedMsg.messages[topicMessageIndex] as { messageID: string, [key: string]: string }
                if (topicMsg.messageID === messageID) {
                    // Copy this message fields to another with the new field ID. Then replace the old field with the new
                    const temp: { messageID: string, [key: string]: string } = { messageID: topicMsg.messageID };
                    for (const field in topicMsg) {
                        if (field === fieldID) continue

                        temp[field] = topicMsg[field]

                    }
                    appDataCopy.messages[i].messages[topicMessageIndex] = temp;
                }
            }
        }
    }
    return appDataCopy;
}