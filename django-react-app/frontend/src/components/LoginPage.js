import React, { useEffect, useState } from 'react';
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import store from "../redux/store";
import { useHistory } from 'react-router-dom';


const LoginPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const [state, setState] = useState({
        username: "",
        email: "",
        password: ""
    });
        
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }
    
    const handleLogin = async () => {
        dispatch(loginUser({
            username: state.username,
            email: state.email,
            password: state.password
        }))
        .then(() => {
            const userData = store.getState().userReducer;
            if (userData.user) {
                history.goBack();
            }
            else if (userData.error) {
                console.log(userData.error);
                setState({
                    ...state, 
                    username: "",
                    email: "",
                    password: ""
                });
            }
        });
    }

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
                        value={state.username}
                        onChange={handleChange}
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
                        value={state.email}
                        onChange={handleChange}
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
                        value={state.password}
                        onChange={handleChange}
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
                    onClick={handleLogin}
                    disabled={
                        !(state.email && 
                        state.username &&
                        state.password)
                    }
                >
                    LOGIN
                </Button>
            </Grid>
        </Grid>
    );
}

export default LoginPage;
