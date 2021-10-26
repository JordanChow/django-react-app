import React, { Component } from 'react';
import ProfilePage from './ProfilePage'; 
import ExplorePage from './ExplorePage'; 
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import LoginPage from './LoginPage';

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <p>home page</p>
                    </Route>
                    <Route path="/profile" component={ProfilePage}/>
                    <Route path="/explore" component={ExplorePage}/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </Router>
        )
    }
}
