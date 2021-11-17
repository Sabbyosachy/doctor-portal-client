import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Calender from '../../Shared/Calender/Calender';
import Typography from '@mui/material/Typography';


const Bannerbg={
    background:`url('https://i.ibb.co/zhYKYBd/bg.png')`,
    
  }
  
  const Verticalalign={
    display:'flex',
    height:450,
    alignItems:'center',
  }

const AppointmentHeader = ({date,setDate}) => {
    return (
        <Box sx={{ flexGrow: 1,mt:10,pb:10, }}>
        <Container style={Bannerbg} sx={{  }}>
        <Grid container spacing={2}>
           <Grid style={{...Verticalalign,textAlign:'left'}} item xs={12} md={6}>
           <Calender date={date} setDate={setDate}></Calender>
           </Grid>
           <Grid style={Verticalalign} item xs={12} md={6}>
            <img style={{width:600,marginTop:20}} src="https://i.ibb.co/dP9dYsy/chair.png" alt="" serSet="" />
           </Grid>
         </Grid>
        </Container>
       </Box>
    );
};

export default AppointmentHeader;