import React, { Component } from 'react';
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import ProfilePage from "./ProfilePage";
import LoginPage from "./LoginPage";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RegisterPage from './RegisterPage';
import { Provider } from 'react-redux';
import { store, persistor }from "../redux/store";
import { PersistGate } from 'redux-persist/integration/react';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}> 
                <BrowserRouter>
                    <PersistGate persistor={persistor}>
                        <Navbar />
                        <Switch>
                            <Route exact path="/" component={HomePage}/>
                            <Route path="/profile" component={ProfilePage}/>
                            <Route path="/login" component={LoginPage}/>
                            <Route path="/register" component={RegisterPage}/>
                        </Switch>
                    </PersistGate>
                </BrowserRouter>
            </Provider>
        );
    }
}
