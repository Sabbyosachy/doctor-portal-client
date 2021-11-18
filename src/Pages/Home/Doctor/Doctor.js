import { Grid } from '@mui/material';
import React from 'react';

const Doctor = ({doctor}) => {
    const{name,email,image}=doctor;
    return (
             <Grid item xs={6} md={4}>
                 <img style={{width:'200px',height:'200px'}} src={`data:image/*;base64,${image}`} alt="" srcset="" />
                <h3>{name}</h3>
                <h4>{email}</h4>
            </Grid>
       
    );
};

export default Doctor;