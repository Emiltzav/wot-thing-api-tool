module.exports = {

"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
const mod = __turbopack_external_require__("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/app/home/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: __turbopack_require_stub__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-unused-vars */ __turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
function Home() {
    const [appState, setAppState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        messages: [],
        protocol: "KAFKA"
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex  flex-col  items-center justify-center h-screen  w-screen   bg-slate-600 space-y-2 ",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MainContainer, {
            appState: appState,
            setAppState: setAppState
        }, void 0, false, {
            fileName: "[project]/app/home/page.tsx",
            lineNumber: 31,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
function MainContainer(props) {
    const [topicCount, setTopicCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const topics = [];
    // Button Handler
    const addHandler = ()=>{
        // Copy app state
        // eslint-disable-next-line prefer-const
        let appStateCopy = {
            ...props.appState
        };
        // Append a new topic with empty messages
        appStateCopy.messages.push({
            topic: "Default Topic " + topicCount.toString(),
            messages: []
        });
        // Error checking
        if (typeof props.setAppState !== "function") {
            return;
        }
        // Set component state (just a simple topic counter)
        setTopicCount(topicCount + 1);
        // Set app state
        props.setAppState(appStateCopy);
    };
    // For every topic generate a TopicContainer
    if (typeof props.appState === "object" && props.appState !== null) {
        // Loop through each topic and create a TopicContainer
        for(let i = 0; i < props.appState.messages.length; i++){
            topics.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TopicContainer, {
                appState: props.appState,
                setAppState: props.setAppState,
                topicID: props.appState.messages[i]["topic"]
            }, props.appState.messages[i]["topic"], false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 75,
                columnNumber: 25
            }, this));
        }
    }
    const SendRequest = async ()=>{
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
                    messages: {}
                }
            },
            operations: {
                properties_resource_operation: {
                    action: "send",
                    channel: {
                        $ref: "#/channels/properties_resource_channel"
                    },
                    messages: []
                }
            },
            components: {
                schemas: {},
                messages: {}
            }
        };
        const jsonSchemaType = new Map([
            [
                "str",
                "string"
            ],
            [
                "bytes",
                "string"
            ],
            [
                "bytes",
                "string"
            ],
            [
                "bytes",
                "string"
            ],
            [
                "int",
                "number"
            ],
            [
                "float",
                "number"
            ],
            [
                "bool",
                "boolean"
            ],
            [
                "dict",
                "object"
            ],
            [
                "List[str]",
                "array;string"
            ],
            [
                "List[bytes]",
                "array;string"
            ],
            [
                "List[int]",
                "array;number"
            ],
            [
                "List[float]",
                "array;number"
            ],
            [
                "List[bool]",
                "array;boolean"
            ],
            [
                "List[dict]",
                "array;object"
            ]
        ]);
        if (typeof props.appState.messages !== "undefined") {
            //Loop topic
            for(let i = 0; i < props.appState.messages.length; i++){
                const selectedTopic = props.appState.messages[i];
                // Loop Topic Messages
                for(let j = 0; j < selectedTopic.messages.length; j++){
                    const selectedMsg = selectedTopic.messages[j];
                    const msgID = selectedMsg["messageID"];
                    const payload = {
                        type: "object",
                        properties: {}
                    };
                    // Loop message fields
                    for(const key in selectedMsg){
                        if (key === "messageID") continue;
                        const fieldID = key;
                        const fieldTypeCode = jsonSchemaType.get(selectedMsg[key]);
                        if (typeof fieldTypeCode !== "undefined") {
                            const fieldType = fieldTypeCode.split(";");
                            if (fieldType.length > 1) {
                                payload.properties[fieldID] = {
                                    type: "array",
                                    items: {
                                        type: fieldType[1]
                                    }
                                };
                            } else {
                                payload.properties[fieldID] = {
                                    type: fieldType[0]
                                };
                            }
                        }
                    }
                    asyncapiTD.components.schemas[msgID + "_payload"] = payload;
                    asyncapiTD.components.messages[msgID] = {
                        payload: {
                            $ref: "#/components/schemas/" + msgID + "_payload"
                        }
                    };
                    asyncapiTD.channels.properties_resource_channel.messages[msgID] = {
                        $ref: "#/components/messages/" + msgID
                    };
                    asyncapiTD.operations.properties_resource_operation.messages.push({
                        $ref: "#/channels/properties_resource_channel/messages/" + msgID
                    });
                }
            }
        }
        const tdAsJson = JSON.stringify(asyncapiTD, null, 2);
        const blob = new Blob([
            tdAsJson
        ], {
            type: 'application/json'
        });
        const href = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = href;
        link.download = "EmulatedDeviceTD.json";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(href);
    // const res = await DataFetch(props.appState)
    // if (res.error === "true") {
    //     alert(res.msg)
    // }
    // else {
    //     const activeAppData = JSON.stringify(props.appState);
    //     const encodedData = encodeURIComponent(activeAppData);
    //     window.open('/kafka?data=' + encodedData, '_blank', 'noopener, noreferrer');
    // }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col overflow-y-scroll  w-1/3 space-y-2 bg-orange-200 rounded-md p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col  space-y-2 w-full",
                children: topics
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 226,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ProtocolContainer, {
                appState: props.appState,
                setAppState: props.setAppState
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 229,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row  justify-end w-full",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-active btn-primary   ",
                    onClick: addHandler,
                    children: "Add Topic"
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 231,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 230,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-active btn-primary  ",
                    onClick: SendRequest,
                    children: "Send"
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 234,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 233,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 225,
        columnNumber: 9
    }, this);
}
function TopicContainer(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [activeTopicID, setActiveTopicID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.topicID); // The topicID that is currently active (used for search and assign operations)
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [currentTopicID, setCurrentTopicID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.topicID); // The new topicID that will replace the active one 
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [generatedMessages, setGeneratedMessages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0); // Count user generated messages
    // Message Display
    // eslint-disable-next-line prefer-const
    let displayMessages = [];
    for(let i = 0; i < props.appState.messages.length; i++){
        if (props.appState.messages[i]["topic"] === activeTopicID) {
            if ('messages' in props.appState.messages[i]) {
                const topicMessages = props.appState.messages[i].messages;
                for(let j = 0; j < topicMessages.length; j++){
                    displayMessages.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SingleMessage, {
                        messageID: topicMessages[j]['messageID'],
                        appState: props.appState,
                        setAppState: props.setAppState,
                        topicID: activeTopicID
                    }, topicMessages[j]['messageID'], false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 261,
                        columnNumber: 42
                    }, this));
                }
                break;
            }
        }
    }
    // ============================== Handlers ==============================
    const topicChangeHandler = (event)=>{
        setCurrentTopicID(event.target.value);
    };
    const saveHandler = ()=>{
        // check empty
        if (currentTopicID.trim().length === 0) {
            alert("Topic cannot be empty");
            return;
        }
        setActiveTopicID(currentTopicID);
        // eslint-disable-next-line prefer-const
        let appStateCopy = {
            ...props.appState
        };
        for(let i = 0; i < appStateCopy.messages.length; i++){
            if (appStateCopy.messages[i]["topic"] === activeTopicID) {
                appStateCopy.messages[i]["topic"] = currentTopicID;
                // Error checking
                if (typeof props.setAppState !== "function") {
                    return;
                }
                props.setAppState(appStateCopy);
            }
        }
    };
    const addMessageHandler = ()=>{
        const appStateCopy = {
            ...props.appState
        };
        for(let i = 0; i < appStateCopy.messages.length; i++){
            if (appStateCopy.messages[i]["topic"] === activeTopicID) {
                if ('messages' in appStateCopy.messages[i]) {
                    appStateCopy.messages[i]['messages'].push({
                        "messageID": activeTopicID + "_MessageID_" + generatedMessages.toString()
                    });
                    // Component state
                    setGeneratedMessages(generatedMessages + 1);
                    if (typeof props.setAppState === 'function') {
                        props.setAppState(appStateCopy);
                    }
                    break;
                }
            }
        }
    };
    const deleteTopic = ()=>{
        const appStateCopy = {
            ...props.appState
        };
        appStateCopy['messages'] = appStateCopy['messages'].filter((item)=>item['topic'] !== activeTopicID);
        if (typeof props.setAppState === 'function') {
            props.setAppState(appStateCopy);
        }
    };
    // ============================== Handlers ==============================
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col  space-x-2   border-2 border-gray-500 rounded-md p-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row  space-x-2 items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "Topic:"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 331,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        onChange: topicChangeHandler,
                        type: "text",
                        value: currentTopicID,
                        className: "input input-bordered w-full max-w-xs bg-white"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 332,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-active btn-success ",
                        onClick: saveHandler,
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 333,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-active btn-error ",
                        onClick: deleteTopic,
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 334,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 330,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 336,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-start  space-y-2 w-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 gap-4 w-full items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Messages:"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 340,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 339,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "justify-self-end pr-2",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn btn-active btn-primary   ",
                                    onClick: addMessageHandler,
                                    children: "Add"
                                }, void 0, false, {
                                    fileName: "[project]/app/home/page.tsx",
                                    lineNumber: 343,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/home/page.tsx",
                                lineNumber: 342,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 338,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex flex-col space-y-4",
                        children: displayMessages
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 346,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 337,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 329,
        columnNumber: 9
    }, this);
}
// Represents a single message
function SingleMessage(props) {
    const [activeMessageID, setActiveMessageID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.messageID);
    const [currentMessageID, setCurrentMessageID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.messageID);
    const [fieldCount, setFieldCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    // Load message fields
    const displayFields = [];
    for (const msg of props.appState['messages']){
        if (msg['topic'] === props.topicID) {
            for(let i = 0; i < msg['messages'].length; i++){
                const currentMessage = msg['messages'][i];
                if (currentMessage['messageID'] === activeMessageID) {
                    let counter = 0;
                    for (const [key, value] of Object.entries(currentMessage)){
                        if (key === 'messageID') continue;
                        displayFields.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MessageField, {
                            topicID: props.topicID,
                            messageID: props.messageID,
                            fieldID: key,
                            currentType: value,
                            appState: props.appState,
                            setAppState: props.setAppState
                        }, props.topicID + "_" + props.messageID + "_" + key + "_" + counter.toString(), false, {
                            fileName: "[project]/app/home/page.tsx",
                            lineNumber: 375,
                            columnNumber: 29
                        }, this));
                        counter++;
                    }
                }
            }
            break;
        }
    }
    // Set the message id
    const changeMessageID = (event)=>{
        setCurrentMessageID(event.target.value);
    };
    /**
     *  Create a new field for the current message
     */ const appendMessageField = ()=>{
        const appStateCopy = {
            ...props.appState
        };
        const DEFAULT_FIELD_ID = "Default_field_ID_" + fieldCount.toString();
        const DEFAULT_FIELD_TYPE = "str";
        for (const msg of appStateCopy['messages']){
            if (msg['topic'] === props.topicID) {
                for(let i = 0; i < msg['messages'].length; i++){
                    const currentMessage = msg['messages'][i];
                    if (currentMessage['messageID'] === activeMessageID) {
                        currentMessage[DEFAULT_FIELD_ID] = DEFAULT_FIELD_TYPE;
                        break;
                    }
                }
                break;
            }
        }
        if (typeof props.setAppState === 'function') {
            props.setAppState(appStateCopy);
        }
        setFieldCount(fieldCount + 1);
    };
    /**
     *  Delete a message with all its fields
     */ const deleteMsg = ()=>{
        const appStateCopy = {
            ...props.appState
        };
        const newMessagesArray = [];
        // Loop all messages
        for(let i = 0; i < appStateCopy.messages.length; i++){
            // Topic Match
            if (appStateCopy.messages[i].topic === props.topicID) {
                const selectedTopic = i; // Save index of topic
                // Loop all topic messages
                for(let msgIndx = 0; msgIndx < appStateCopy.messages[selectedTopic].messages.length; msgIndx++){
                    if (appStateCopy.messages[selectedTopic].messages[msgIndx]['messageID'] !== activeMessageID) {
                        // If not the current message save
                        newMessagesArray.push(appStateCopy.messages[selectedTopic].messages[msgIndx]);
                    }
                }
                // Update topic messages array
                appStateCopy.messages[selectedTopic].messages = [
                    ...newMessagesArray
                ];
                // Update app state
                if (typeof props.setAppState === 'function') {
                    props.setAppState(appStateCopy);
                }
                break;
            }
        }
    };
    const saveMsg = ()=>{
        const appStateCopy = {
            ...props.appState
        };
        // Update app state
        for (const msg of appStateCopy['messages']){
            if (msg['topic'] === props.topicID) {
                for (const singleMsg of msg['messages']){
                    if (singleMsg['messageID'] === activeMessageID) {
                        singleMsg['messageID'] = currentMessageID;
                    }
                }
            }
        }
        props.setAppState(appStateCopy);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        id: "SingleMessageContainer",
        className: "flex flex-col w-full  ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "messageIDContainer",
                className: "flex flex-row space-x-2 w-full items-center pr-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        children: "MessageID:"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 475,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        value: currentMessageID,
                        className: "input input-bordered w-full max-w-xs bg-white input-sm",
                        onChange: changeMessageID
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 476,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-active btn-success   ",
                        onClick: saveMsg,
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 477,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn btn-active btn-error   ",
                        onClick: deleteMsg,
                        children: "Delete"
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 478,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 474,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "fieldContainer",
                className: "flex flex-col",
                children: displayFields
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 480,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-row justify-end w-full pr-1",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: appendMessageField,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/add.png" // Path to the image in the public folder
                        ,
                        alt: "Button Icon",
                        width: 20,
                        height: 20
                    }, void 0, false, {
                        fileName: "[project]/app/home/page.tsx",
                        lineNumber: 485,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 484,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 483,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 473,
        columnNumber: 9
    }, this);
}
function MessageField(props) {
    const [activeFieldID, setActiveFieldID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.fieldID);
    const [currentFieldID, setCurrentFieldID] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.fieldID);
    const [fieldType, setFieldType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.currentType);
    const AvailableFieldTypes = {
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
    };
    // Generate options for the select element
    const typeOptions = [];
    for(const key in AvailableFieldTypes){
        typeOptions.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: AvailableFieldTypes[key],
            children: AvailableFieldTypes[key]
        }, key, false, {
            fileName: "[project]/app/home/page.tsx",
            lineNumber: 527,
            columnNumber: 26
        }, this));
    }
    const fieldIDHandler = (event)=>{
        setCurrentFieldID(event.target.value);
    };
    const fieldTypeHandler = (event)=>{
        const appStateCopy = ChangeFieldType(props.appState, props.topicID, props.messageID, activeFieldID, event.target.value);
        props.setAppState(appStateCopy);
        setFieldType(event.target.value);
    };
    const deleteField = ()=>{
        const appStateCopy = DeleteField(props.appState, props.topicID, props.messageID, activeFieldID);
        props.setAppState(appStateCopy);
    };
    const saveID = ()=>{
        const appStateCopy = ChangeFieldID(props.appState, props.topicID, props.messageID, activeFieldID, currentFieldID);
        props.setAppState(appStateCopy);
        setActiveFieldID(currentFieldID);
        alert("New Field ID: " + currentFieldID);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row  w-full space-y-5 space-x-2 items-baseline",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    value: currentFieldID,
                    className: "input input-bordered w-full max-w-xs bg-white",
                    onChange: fieldIDHandler
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 558,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 557,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    className: "select w-full max-w-xs bg-white",
                    value: fieldType,
                    onChange: fieldTypeHandler,
                    children: typeOptions
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 561,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 560,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-active btn-success   ",
                    onClick: saveID,
                    children: "Save "
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 566,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 565,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn btn-active btn-error   ",
                    onClick: deleteField,
                    children: "Delete"
                }, void 0, false, {
                    fileName: "[project]/app/home/page.tsx",
                    lineNumber: 569,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 568,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 556,
        columnNumber: 9
    }, this);
}
/**
 *  Display a dropdown selection about the protocol.
 */ function ProtocolContainer(props) {
    const [selectedProtocol, setSelectedProtocol] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(props.appState.protocol);
    const AvailableProtocols = {
        KAFKA: "KAFKA",
        MQTT: "MQTT"
    };
    // Generate option element for every available protocol
    const protocolOptions = [];
    for(const protocol in AvailableProtocols){
        protocolOptions.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            value: protocol,
            children: protocol
        }, protocol, false, {
            fileName: "[project]/app/home/page.tsx",
            lineNumber: 588,
            columnNumber: 30
        }, this));
    }
    const protocolChangeHandler = (event)=>{
        // eslint-disable-next-line prefer-const
        let appStateCopy = {
            ...props.appState
        };
        appStateCopy.protocol = event.target.value;
        setSelectedProtocol(event.target.value);
        // Error checking
        if (typeof props.setAppState !== "function") {
            return;
        }
        props.setAppState(appStateCopy);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row items-center space-x-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                children: "Protocol:"
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 604,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                className: "select w-full max-w-xs bg-white",
                value: selectedProtocol,
                onChange: protocolChangeHandler,
                children: protocolOptions
            }, void 0, false, {
                fileName: "[project]/app/home/page.tsx",
                lineNumber: 605,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/home/page.tsx",
        lineNumber: 603,
        columnNumber: 9
    }, this);
}
// ******************************** Helper Functions ********************************
function ChangeFieldID(appData, topicID, messageID, currentFieldID, newFieldID) {
    const appDataCopy = {
        ...appData
    };
    for(let i = 0; i < appDataCopy.messages.length; i++){
        const selectedMsg = appDataCopy.messages[i] // array of messages
        ;
        if (selectedMsg.topic === topicID) {
            for(let topicMessageIndex = 0; topicMessageIndex < selectedMsg.messages.length; topicMessageIndex++){
                const topicMsg = selectedMsg.messages[topicMessageIndex];
                if (topicMsg.messageID === messageID) {
                    // Copy this message fields to another with the new field ID. Then replace the old field with the new
                    const temp = {
                        messageID: topicMsg.messageID
                    };
                    for(const field in topicMsg){
                        if (field === currentFieldID) {
                            temp[newFieldID] = topicMsg[currentFieldID];
                        } else {
                            temp[field] = topicMsg[field];
                        }
                    }
                    appDataCopy.messages[i].messages[topicMessageIndex] = temp;
                }
            }
        }
    }
    return appDataCopy;
}
function ChangeFieldType(appData, topicID, messageID, fieldID, fieldType) {
    const appDataCopy = {
        ...appData
    };
    for(let i = 0; i < appDataCopy.messages.length; i++){
        if (appDataCopy.messages[i].topic === topicID) {
            for(let topicMessageIndex = 0; topicMessageIndex < appDataCopy.messages[i].messages.length; topicMessageIndex++){
                if (appDataCopy.messages[i].messages[topicMessageIndex].messageID === messageID) {
                    appDataCopy.messages[i].messages[topicMessageIndex][fieldID] = fieldType;
                }
            }
        }
    }
    return appDataCopy;
}
function DeleteField(appData, topicID, messageID, fieldID) {
    const appDataCopy = {
        ...appData
    };
    for(let i = 0; i < appDataCopy.messages.length; i++){
        const selectedMsg = appDataCopy.messages[i] // array of messages
        ;
        if (selectedMsg.topic === topicID) {
            for(let topicMessageIndex = 0; topicMessageIndex < selectedMsg.messages.length; topicMessageIndex++){
                const topicMsg = selectedMsg.messages[topicMessageIndex];
                if (topicMsg.messageID === messageID) {
                    // Copy this message fields to another with the new field ID. Then replace the old field with the new
                    const temp = {
                        messageID: topicMsg.messageID
                    };
                    for(const field in topicMsg){
                        if (field === fieldID) continue;
                        temp[field] = topicMsg[field];
                    }
                    appDataCopy.messages[i].messages[topicMessageIndex] = temp;
                }
            }
        }
    }
    return appDataCopy;
}
}}),
"[project]/app/home/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__a3d101._.js.map