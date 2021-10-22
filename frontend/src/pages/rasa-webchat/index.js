import React, { useCallback, useState } from "react";
import Widget from 'rasa-webchat';
import "./styles.css";

export default function chatBot() {
    return (
        <><Widget
            socketUrl={"https://bf-botfront.development.agents.botfront.cloud"}
            customData={{ "language": "en" }} // arbitrary custom data. Stay minimal as this will be added to the socket
            title={"Title"}
        /><p>oi</p></>
    )
}