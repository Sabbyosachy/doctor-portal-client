import { Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const[name,setName]=useState('');
    const[email,setEmail]=useState('');
    const[image,setImage]=useState(null);
    
    // const handlename=e=>{
    //     e.target.value;
    // }

    const handleSubmit=e=>{

        e.preventDefault();
        if(!image){
            return;
        }

        const formData=new FormData();
        formData.append('name',name);
        formData.append('email',email);
        formData.append('image',image);

        fetch('https://protected-mesa-07765.herokuapp.com/doctors', {
        method: 'POST',
        body: formData
        })
        .then(response => response.json())
        .then(result => {
        if(result.insertedId){
            alert('Doctor Add SuccessFully');
        }
        })
        .catch(error => {
        console.error('Error:', error);
        });

    }

    return (
        <div>
            <h2>Add A Doctor</h2>
            <form onSubmit={handleSubmit}>
            <TextField onChange={e=>setName(e.target.value)} required sx={{width:'25%'}} label="Name" variant="standard" />
            <br/>
            <TextField onChange={e=>setEmail(e.target.value)} required sx={{width:'25%'}} type="email" label="Email" variant="standard" />
            <br/>
            <Input onChange={e=>setImage(e.target.files[0])} accept="image/*" type="file" />
  <br/>
  <br/>
  <Button variant="contained" type="submit">
    Add Doctor
  </Button>
            
            </form>
        </div>
    );
};

export default AddDoctor;