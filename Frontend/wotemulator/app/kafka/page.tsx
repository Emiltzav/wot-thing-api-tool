"use client"
import { useSearchParams } from "next/navigation";
import { JSX, useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ACTIVE_KAFKA_HOST_AND_PORTS = {
    SEND_PORT: "8000",
    SEND_HOST: "127.0.0.1",
    RECEIVE_PORT: "19000",
    RECEIVE_HOST: "127.0.0.1",
    DOCS_URL: "http://127.0.0.1:8000/docs"
}



export default function MainContainer() {
    const [appState, setAppState] = useState(null);
    const searchParams = useSearchParams(); // Get app data from query

    // Set Component state with the app data. Keep depedency array empty to run once.
    useEffect(() => {
        const data: string | null = searchParams.get("data")
        if (typeof data === 'string') {
            try {
                const app_data = JSON.parse(data)
                setAppState(app_data)
            }
            catch (error) {
                console.log(error)
            }
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (appState === null) {
        return (
            <div className="flex  justify-center items-center h-screen bg-slate-500">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }



    return (
        <div className="flex flex-col justify-center items-center h-screen bg-slate-600 w-screen">
            <div className="flex flex-col justify-center items-center w-2/3 bg-orange-200 p-2 rounded-md">
                <TopLinksContainer
                    messages={appState["messages"]}
                />
            </div>
        </div>
    )
}

interface Message {
    topic: string;
    messages: unknown[];
}

interface AppData {
    messages: Message[];
}
function TopLinksContainer(props: AppData) {

    const topics: JSX.Element[] = []
    for (let i = 0; i < props.messages.length; i++) {
        topics.push(
            <TopicContainer
                key={props.messages[i].topic}
                topicID={props.messages[i].topic}
                topicMessages={props.messages[i].messages}
            />
        )
    }
    const WindowOpen = () => {
        window.open(ACTIVE_KAFKA_HOST_AND_PORTS.DOCS_URL, '_blank', 'noopener, noreferrer')
    }
    return (
        <div className="flex flex-col border-2 border-black rounded-md p-2 space-y-2 w-full">
            {topics}
            <div>
                <button className="btn btn-success" onClick={WindowOpen}>Docs</button>
            </div>
        </div>
    )
}

interface TopicData {
    topicID: string,
    topicMessages: unknown[];
}
function TopicContainer(props: TopicData) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [receiveURL, setReceiveURL] = useState("")

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        const rec_url = "http://" + ACTIVE_KAFKA_HOST_AND_PORTS.RECEIVE_HOST + ":" + ACTIVE_KAFKA_HOST_AND_PORTS.RECEIVE_PORT + "/topic/" + props.topicID.replace(/\s+/g, '_') + "/messages"
        setReceiveURL(rec_url)
    }, [])

    const messages: JSX.Element[] = []
    for (let i = 0; i < props.topicMessages.length; i++) {
        messages.push(
            <SingleMessageContainer
                key={props.topicID + "/" + (props.topicMessages[i] as { messageID: string })['messageID']}
                topicID={props.topicID}
                msgFields={props.topicMessages[i] as MessageProps}
            />
        )
    }
    const WindowOpen = () => {

        window.open(receiveURL, '_blank', 'noopener, noreferrer')
    }
    return (
        <div className="flex flex-col border-2 border-black rounded-md p-2 space-y-2">
            <div>
                <h1>Topic Name: {props.topicID}</h1>
            </div>
            <div>
                {messages}
            </div>
            <div className="flex justify-end">
                <button className="btn btn-success" onClick={WindowOpen}>Watch</button>
            </div>

        </div>
    )
}

interface MessageProps {
    topicID: string,
    msgFields: object
}

function SingleMessageContainer(props: MessageProps) {
    const [sendURL, setSendURL] = useState("")

    useEffect(() => {
        const send_url = "http://" + ACTIVE_KAFKA_HOST_AND_PORTS.SEND_HOST + ":" + ACTIVE_KAFKA_HOST_AND_PORTS.SEND_PORT + "/producer/" + props.topicID.replace(/\s+/g, '_') + "/" + ((props.msgFields as { messageID: string })['messageID'] as string).replace(/\s+/g, '_')
        setSendURL(send_url)

    }, [])



    return (
        <div className="flex flex-col space-y-3">
            <div className="flex flex-row items-baseline space-x-4">
                <label>Send:</label>
                <input type="text " value={sendURL} className="input input-bordered w-full  bg-white" readOnly />
            </div>
        </div>
    )
}