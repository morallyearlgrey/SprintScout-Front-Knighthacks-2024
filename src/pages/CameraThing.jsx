import React, { useState } from 'react';
import './CameraThing.css';

function CameraThing() {
    return(
        <div className="content">
            <div className = "lContents">
                <img className="thisComputerHatesReactToo" src="computer.png"/>
            </div>
            <div className="rContents">
                <h1 className="title">IMAGINE INTERACTIVE ANALYSIS</h1>
                <h1 className="questionSubheading">Whisper, OpenAI's speech recognition system, integrated with advanced computer vision technology, allows users to interact with the system through both voice and hand gestures. Using your webcam, the system detects hand gestures to create bounding boxes on-screen, while Whisper transcribes your spoken input into text, dynamically placing it within the bounding box. This integration offers a refined and highly efficient means of communication for businesses to engage with digital environments. </h1>
                <button id="answerMe" type="button" onClick={() => navigate("/")}>TRY IT OUT</button>
            </div>
        </div>
    );
}

export default CameraThing;