import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import store from '../redux/store';

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>  
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Insert_Logo
            </Typography>
            <div>
                <Button 
                    color="inherit"
                    to="/register"
                    component={Link}
                >Register</Button>
                <Button 
                    color="inherit"
                    to="/login"
                    component={Link}
                >Login</Button>
            </div>
            </Toolbar>
        </AppBar>
        </Box>
    );
}
