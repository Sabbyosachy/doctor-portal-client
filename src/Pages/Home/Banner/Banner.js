import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';


const Bannerbg={
  background:`url('https://i.ibb.co/zhYKYBd/bg.png')`,
  
}

const Verticalalign={
  display:'flex',
  height:450,
  alignItems:'center',
}

const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1,mt:10,pb:10, }}>
     <Container style={Bannerbg} sx={{  }}>
     <Grid container spacing={2}>
        <Grid style={{...Verticalalign,textAlign:'left'}} item xs={12} md={6}>
       <Box>
       <Typography sx={{ mb:1,mt:7,color: 'primary.main',textAlign:'left',fontWeight: 'bold'} } variant="h4" component="div">
         Your New Smile <br />
         Starts Here
        </Typography>
        <Typography sx={{pr:4,my:4,textAlign:'justify',color:"text.secondary"} } variant="p" component="div">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur optio omnis architecto nisi nobis? Odit, culpa. Sed totam accusantium provident dolor. Necessitatibus modi ab cum nam laboriosam illum eligendi magnam mollitia dolorem incidunt consectetur quidem, corrupti dignissimos vitae repudiandae veritatis.
        </Typography>
        <Button style={{backgroundColor:'#5CE7ED'}} variant="contained">Get Appointment</Button>
       </Box>
        </Grid>
        <Grid style={Verticalalign} item xs={12} md={6}>
         <img style={{width:400,marginTop:20}} src="https://i.ibb.co/dP9dYsy/chair.png" alt="" serSet="" />
        </Grid>
      </Grid>
     </Container>
    </Box>
    );
};


export default Banner;