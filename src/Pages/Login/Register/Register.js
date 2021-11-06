import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import { Alert, Button, Container, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';
import { useLocation,useHistory } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Register = () => {
    const[loginData,setLoginData]=useState({});
    const{user,registerUser,isLoading,authError}=useAuth();
    const location = useLocation();
    const history=useHistory();
    const handleOnBlur=e=>{
      const field=e.target.name;
      const value=e.target.value;
      const newLoginData={...loginData};
      newLoginData[field]=value;
      setLoginData(newLoginData); 
        
    }

    const handleRegister=e=>{
        
      registerUser(loginData.email,loginData.password,loginData.name,location, history);
      e.preventDefault();
    }
    return (
        <Container>

<Grid container spacing={2}>
  <Grid sx={{mt:27}} item xs={12} md={6}>
  <Typography variant="h6" gutterBottom component="div">
       Register
      </Typography>
 {!isLoading && <form onSubmit={handleRegister}>
  <TextField sx={{width:'75%',m:1}} required type="text" id="standard-basic" name="name" onBlur={handleOnBlur} label="Your Name" variant="standard" />
  <TextField sx={{width:'75%',m:1}} required type="email" id="standard-basic" name="email" onBlur={handleOnBlur} label="Your Email" variant="standard" />
  <br />
  <TextField sx={{width:'75%',m:1}} required name="password" onBlur={handleOnBlur} id="standard-password-input" type="password" label="Your Password" variant="standard" />
  <Button type="submit" sx={{width:'75%',m:2}} style={{backgroundColor:'#5CE7ED'}} variant="contained">Register</Button> 
  <NavLink style={{textDecoration:'none'}} to="/login">
  <Button variant="text">Already Register? Please Login</Button>
  </NavLink>
  </form>}
  {isLoading &&  <CircularProgress />}
  {user?.email &&  <Alert severity="success">Your Account is created successfully!</Alert>}
  {authError &&  <Alert severity="error">{authError}</Alert>}
  </Grid>
  <Grid item xs={12} md={6}>
   <img style={{width:'80%',padding:'30px'}} src="https://i.ibb.co/G0sWGsS/login.png" alt="" srcset="" />
  </Grid>
  
</Grid>
       </Container>
    );
};

export default Register;