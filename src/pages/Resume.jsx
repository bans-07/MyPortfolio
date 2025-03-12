import React from "react";

function Resume() {
    return (
        <div className="container">
            <h1>Resume</h1>
            <p>Download my resume <a href="/resume.pdf" download>here</a>.</p>
            <h2>Proficiencies</h2>
            <ul>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>SQL</li>
                <li>Git</li>
            </ul>
        </div>
    );
}

export default Resume;
