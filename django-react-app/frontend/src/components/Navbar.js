import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Button from '@mui/material/Button';

import * as React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../redux/actions/users';


const Navbar = () => {
    const userData = useSelector(state => state.userReducer);
    const history = useHistory();
    const dispatch = useDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfile = () => {
        history.push("/profile");
    }

    const handleLogout = () => {
        dispatch(logoutUser(userData.token));
    }
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const loggedOut = () => {
        return (
            <React.Fragment>
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
            </React.Fragment>
        )
    }
    
    const loggedIn = () => {
        return (
            <>
                <IconButton 
                    color="inherit"
                    aria-controls="menu-navbar"
                    aria-haspopup="true"     
                    onClick={handleMenu}
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-navbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleProfile}>Profile</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </>
        )
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>  
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Insert_Logo
                    </Typography>
                    {userData.user ? loggedIn() : loggedOut()}
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;