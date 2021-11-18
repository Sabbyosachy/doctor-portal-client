import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    useEffect(()=>{
        fetch('https://protected-mesa-07765.herokuapp.com/doctors')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[])
    return (
        <div>
            <Typography style={{marginTop:'70px'}} sx={{ mb:1,mt:3,color: 'primary.main'} } variant="h6" component="div">
          All Doctors
        </Typography>
        <Typography sx={{ mb:10,fontWeight: 'bold'} } variant="h4" component="div">
        Our Best Doctors
        </Typography>
          <Container>
          <Grid container spacing={2}>
            {
                doctors.map(doctor=><Doctor key={doctor._id} doctor={doctor}></Doctor>)
            }
            </Grid>
          </Container>
        </div>
    );
};

export default Doctors;