import React, { Component } from 'react';
import { render } from "react-dom";
import HomePage from "./HomePage";
import ProfilePage from "./ProfilePage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment> 
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={HomePage}/>
                        <Route path="/profile" component={ProfilePage}/>
                        <Route path="/login" component={LoginPage}/>
                        <Route path="/register" component={RegisterPage}/>
                    </Switch>
                </BrowserRouter>
            </React.Fragment>
        );
    }
}

// const appDiv = document.getElementById("app");
// render(<App />, appDiv);
