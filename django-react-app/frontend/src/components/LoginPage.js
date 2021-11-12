import React, { useState } from 'react';
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/actions/users';
import { store } from "../redux/store";
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
        await dispatch(loginUser({
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
        <>
            <Card style={{ maxWidth: 450, margin: "50px auto", padding: "5px 5px" }}>
                <CardContent>
                    <Typography style={{ marginBottom: "20px" }} align="center" gutterBottom variant="h4">
                        Login
                    </Typography>
                    <form>
                        <Grid container spacing={3} alignItems="center" justifyContent="center">
                            <Grid item xs={8}>
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
                            </Grid>
                            <Grid item xs={8}>
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
                            </Grid>
                            <Grid item xs={8}>
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
                            </Grid>
                            <Grid item container justifyContent="center" spacing={1}>
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        to="/"
                                        component={Link}
                                        color="primary"
                                    >
                                        BACK
                                    </Button>
                                </Grid>
                                <Grid item>
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
                            <Grid item container xs={10} justifyContent="center">
                                <Typography>Don't have an account? <Link to="/register">Register here.</Link></Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    );
}

export default LoginPage;


            