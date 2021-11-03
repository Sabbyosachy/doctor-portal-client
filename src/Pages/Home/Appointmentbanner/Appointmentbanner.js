import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Grid from '@mui/material/Grid';

const AppointmentBg={
    background:`url('https://i.ibb.co/L1xks2q/appointment-bg.png')`,
    backgroundColor:'rgba(29, 31, 56 ,0.9 )',
    backgroundBlendMode:'darken, luminosity',
    margin:240
}

const Appointmentbanner = () => {
    return (
        <Box style={AppointmentBg} sx={{ flexGrow: 1 ,mt:5}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
         <img style={{width:400,marginTop:'-110px'}} src="https://i.ibb.co/Th3WnD0/doctor.png" alt="" srcset="" />
        </Grid>
        <Grid  item style={{textAlign:'left'}} xs={12} md={6}>
        <Typography sx={{ mb:1,mt:3,color: 'primary.main'} } variant="h6" component="div">
          Appointment
        </Typography>
      <Typography sx={{ mb:1,fontWeight: 'bold',color: 'white'} } variant="h4" component="div">
        Make An Appointment Today
        </Typography>
      <Typography style={{fontSize:11}} sx={{ mb:3,color: 'white'} } variant="p" component="div">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur provident numquam expedita aliquam, culpa aspernatur cum! Provident assumenda temporibus officiis.
        </Typography>
        <Button style={{backgroundColor:'#5CE7ED'}}  variant="contained">Appointment</Button>
        </Grid>
       
      </Grid>
    </Box>
    );
};

export default Appointmentbanner;