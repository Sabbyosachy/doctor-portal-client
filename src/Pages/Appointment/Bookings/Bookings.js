import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Button from '@mui/material/Button';
import BookingModal from '../BookingModal/BookingModal';

const Bookings = ({booking,date,setBooksucc}) => {
    const{name,time,space}=booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleBookingOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
       
       <>
        <Grid item xs={12} md={4}>
             <Container sx={{pb:5}}>
           <Paper elevation={3} sx={{py:5}}>
             
        <Typography style={{color:'#5CE7ED'}} sx={{ mb:1,textAlign:'center',fontWeight: 'bold'} } variant="h5" component="div">
        {name}
        </Typography>
        <Typography style={{fontSize:16}} sx={{ mb:1,textAlign:'center'} } variant="h6" component="div">
        {time}
        </Typography>
        <Typography style={{fontSize:14}} sx={{ mb:1,textAlign:'center'} } variant="h6" component="div">
        {space} space are available
        </Typography>
        <Button onClick={handleBookingOpen} style={{backgroundColor:'#5CE7ED'}} variant="contained">Book Now</Button> 
           </Paper>
           </Container>
        </Grid>
        <BookingModal date={date} booking={booking} handleBookingClose={handleBookingClose} openBooking={openBooking} setBooksucc={setBooksucc}></BookingModal>
       </>
        
    );
};

export default Bookings;