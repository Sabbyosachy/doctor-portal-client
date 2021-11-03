import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

const Servicer=[
{
    name:'Fluoride Treatment',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repellendus aliquam ab animi molestiae id tempore obcaecati eligendi corrupti fuga, magnam sequi veritatis aliquid ex, odit a voluptatum. ',
    img: 'https://i.ibb.co/HKZC6nC/fluoride.png'
},
{
    name:'Cavity Filling',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repellendus aliquam ab animi molestiae id tempore obcaecati eligendi corrupti fuga, magnam sequi veritatis aliquid ex, odit a voluptatum. ',
    img: 'https://i.ibb.co/9s2CQ4G/cavity.png'
},
{
    name:'Teeth Whitening',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit repellendus aliquam ab animi molestiae id tempore obcaecati eligendi corrupti fuga, magnam sequi veritatis aliquid ex, odit a voluptatum.',
    img: 'https://i.ibb.co/VSkjKfR/whitening.png'
}
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
      <Container sx={{ mt:5 }}>
      <Typography sx={{ mb:3,color: 'primary.main'} } variant="h6" component="div">
          Our Services
        </Typography>
      <Typography sx={{ mb:3,fontWeight: 'bold'} } variant="h4" component="div">
        Services We Provide
        </Typography>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
       {
           Servicer.map(service=><Service key={service.name} service={service}>

           </Service>)
       }
      </Grid>
      </Container>
    </Box>
    );
};

export default Services;