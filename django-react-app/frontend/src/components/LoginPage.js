import React, { Component } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import { Redirect } from 'react-router';



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
            email: this.state.email,
            password: this.state.password,
        });

        if (JSON.parse(localStorage.getItem("user"))){
            // if user logged in?
        } 
        else {
            this.setState({
                username: "",
                email: "",
                password: ""
            })
        }
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

export default connect(null, { loginUser })(LoginPage);
