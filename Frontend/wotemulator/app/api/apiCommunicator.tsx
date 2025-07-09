"use server"
interface AppData {
    messages: Message[];
    protocol: string;
}
interface Message {
    topic: string;
    messages: unknown[];
}

interface ServerResponse{
    error:string,
    [key:string]:string
}

async function DataFetch(data:AppData):Promise<ServerResponse> {
    const BACKEND_URL: string = "http://127.0.0.1:8080/messages/create"
    
    try {
        const response = await fetch(BACKEND_URL,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json', // Important: Tell the server you're sending JSON
                },
                body: JSON.stringify(data), // Convert your data to JSON
            })

        // Check if the response is ok (status code 200-299)
        if (!response.ok) {
            console.log(`HTTP error! status: ${response.status}`);
        }
        const serverResp:ServerResponse  = await response.json() as ServerResponse
        return serverResp
    } catch (error) {
        console.log(error);
        return { error: 'true' };
    }
}


export { DataFetch }