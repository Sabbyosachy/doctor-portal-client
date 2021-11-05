import { Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
const Login = () => {
    const[loginData,setLoginData]=useState({})
    const handleOnchange=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newLoginData={...loginData};
      newLoginData[field]=value;
      setLoginData(newLoginData); 
        
    }

    const handleLogin=e=>{
        alert('hello');
        e.preventDefault();
    }
    return (
       <Container>

<Grid container spacing={2}>
  <Grid sx={{mt:27}} item xs={12} md={6}>
  <Typography variant="h6" gutterBottom component="div">
       Login
      </Typography>
  <form onSubmit={handleLogin}>
  <TextField sx={{width:'75%',m:1}} required id="standard-basic" type="email" name="email" onChange={handleOnchange} label="Your Email" variant="standard" />
  <br />
  <TextField sx={{width:'75%',m:1}} required name="password" onChange={handleOnchange} id="standard-password-input" type="password" label="Your Password" variant="standard" />
  <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#5CE7ED'}} variant="contained">Login</Button> 
  </form>
  <NavLink style={{textDecoration:'none'}} to="/register">
  <Button variant="text">New user? Please Register</Button>
  </NavLink>
  </Grid>
  <Grid item xs={12} md={6}>
   <img style={{width:'80%',padding:'30px'}} src="https://i.ibb.co/G0sWGsS/login.png" alt="" srcset="" />
  </Grid>
  
</Grid>
       </Container>
    );
};

export default Login;