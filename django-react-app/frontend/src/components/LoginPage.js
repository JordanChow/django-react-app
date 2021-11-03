import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import Alert from '@mui/material/Alert';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import { Redirect } from "react-router-dom";


class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        };
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    
    handleLogin = () => {
        this.props.loginUser({
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        })
        .then(() => {
            if (this.props.isLoggedIn) {
                // return to home
            } 
            else {
                this.setState({
                    username: '',
                    email: '',
                    password: '',
                })
                // return error message
            }
        })
    }

    render()
    {
        return (
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component="h4" variant="h4">
                        Login
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField 
                            required 
                            id="outlined-basic"
                            label="Username"
                            variant="outlined"
                            fullWidth
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField 
                            required 
                            type="email"
                            label="Email"
                            id="outlined-basic"
                            variant="outlined"
                            fullWidth
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField 
                            required 
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            variant="outlined"
                            fullWidth
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button 
                        variant="outlined"
                        color="primary"
                        to="/"
                        component={Link}
                    >
                        BACK
                    </Button>
                    <Button 
                        variant="contained"
                        color="primary"
                        onClick={this.handleLogin}
                        disabled={
                            !(this.state.email && 
                            this.state.username &&
                            this.state.password)
                        }
                    >
                        LOGIN
                    </Button>
                </Grid>
            </Grid>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.userReducer.user,
        isLoggedIn: state.userReducer.isLoggedIn,
        error: state.userReducer.error
    }
};

export default connect(mapStateToProps, { loginUser })(LoginPage);
