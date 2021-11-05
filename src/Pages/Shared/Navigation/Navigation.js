import React from 'react';
import './Navigation.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Doctor's Portal
          </Typography>
          <Link className="navs" to='/home'>Home</Link>
          <Link className="navs" to='/appointment'>Appointment</Link>
          <NavLink className="navs" to="/login">
          <Button style={{backgroundColor:'#5CE7ED'}} color="inherit">Login</Button>
          </NavLink>
          
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;