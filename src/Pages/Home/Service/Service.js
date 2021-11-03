import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';

import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const{name,img,description}=props.service;
    return (
        <Grid item xs={4} sm={4} md={4}>
        <Card sx={{ minWidth: 275, border: 0}}>
        <CardMedia sx={{ pt:1 }}
        component="img"
       style={{width:'auto', height:'90px' ,margin:'0 auto'}}
        image={img}
        alt="image"
      />
      <CardContent>
        <Typography sx={{ color: 'primary.main',fontWeight: 'bold'} } variant="h5" component="div">
          {name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
      </Grid>
    );
};

export default Service;