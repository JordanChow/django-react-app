import App from "./components/App"
import React from 'react';
import ReactDOM from 'react-dom';
import store from "./redux/store";


const mainDiv = document.getElementById("main")

console.log(store.getState());
    
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    mainDiv
);
