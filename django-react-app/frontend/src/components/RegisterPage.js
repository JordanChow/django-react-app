import * as React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


export default function RegisterPage() {

    return (
        <>
            <Card style={{maxWidth: 450, margin:"50px auto", padding:"5px 5px"}}>
                <CardContent>
                    <Typography style={{marginBottom:"20px"}} align="center" gutterBottom variant="h4">
                        Register
                    </Typography>
                    <form>
                        <Grid container spacing={3} alignItems="center" justifyContent="center">
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Username"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Email"
                                    type="email"
                                />
                            </Grid>
                            <Grid item xs={8}>
                                <TextField
                                    required
                                    variant="outlined"
                                    fullWidth
                                    label="Password"
                                />
                            </Grid>
                            <Grid item container justifyContent="center" spacing={1}>
                                <Grid item>
                                    <Button 
                                        color="primary" 
                                        variant="outlined"
                                        to="/"
                                        component={Link}
                                        >
                                        BACK
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                        >
                                        SUBMIT
                                    </Button>
                                </Grid>
                            </Grid>
                            <Grid item container justifyContent="center" xs={10}>
                                <Typography>Already have an account? <Link to="/login">Login here.</Link></Typography>
                            </Grid>
                        </Grid>
                    </form>
                </CardContent>
            </Card>
        </>
    )
}
