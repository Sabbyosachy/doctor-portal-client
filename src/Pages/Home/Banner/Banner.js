import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:10, }}>
     <Container sx={{ pb:15 }}>
     <Grid container spacing={2}>
        <Grid style={{textAlign:'left'}} item xs={12} md={5}>
        <Typography sx={{ mb:1,mt:7,color: 'primary.main',textAlign:'left',fontWeight: 'bold'} } variant="h4" component="div">
         Your New Smile <br />
         Starts Here
        </Typography>
        <Typography sx={{ mb:2,mt:3,textAlign:'justify',color:"text.secondary"} } variant="p" component="div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio omnis architecto nisi nobis? Odit, culpa. Sed totam accusantium provident dolor. Necessitatibus modi ab cum nam laboriosam illum eligendi magnam mollitia dolorem incidunt consectetur quidem, corrupti dignissimos vitae repudiandae veritatis.
        </Typography>
        <Button style={{backgroundColor:'#5CE7ED'}} variant="contained">Get Appointment</Button>
        </Grid>
        <Grid item xs={12} md={7}>
         <img style={{width:620}} src="https://i.ibb.co/dP9dYsy/chair.png" alt="" srcset="" />
        </Grid>
      </Grid>
     </Container>
    </Box>
    );
};


export default Banner;