import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const AdminPanale = () => {
    const [email,setEmail]=useState('');

    const handleOnBlur=e=>{
        setEmail(e.target.value);
    }
    const handleAdminSubmit=(e)=>{
        const user={email}
        fetch('http://localhost:5000/users/admin',{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })
     e.preventDefault();
    }
    return (
        <div>
            <h2>Welcome To Admin Dashboard</h2>
            <form onSubmit={handleAdminSubmit}>
            <TextField  label="Email" type="email" onBlur={handleOnBlur} variant="standard" />
            <br/>
            <Button style={{marginTop:'20px'}} type="submit" variant="contained">Make Admin</Button>
            </form>
        </div>
    );
};

export default AdminPanale;