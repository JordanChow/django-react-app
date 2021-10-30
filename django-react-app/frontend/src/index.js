import App from "./components/App"
import React from 'react';
import ReactDOM from 'react-dom';

const mainDiv = document.getElementById("main")
    
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    mainDiv
);
