import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Bookings from '../Bookings/Bookings';
import { Alert } from '@mui/material';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 AM - 09.00 AM',
        price:20,
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00 AM - 10.00 AM',
        price:15,
        space: 8,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00 AM - 11.00 AM',
        price:10,
        space: 9,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 AM - 12.00 PM',
        price:17,
        space: 5,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 PM - 07.00 PM',
        price:19,
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 PM - 08.00 PM',
        price:15,
        space: 10,
    },
]


const AvailableAppointments = ({date}) => {
    const[booksucc,setBooksucc]=useState(false)
    return (
        <container>
            <h2 style={{color:'#5CE7ED'}}>Availabel Appointments:{date.toDateString()}</h2>
            <Box sx={{ flexGrow: 1 }}>
            {booksucc &&  <Alert severity="success">Appointment Booking Successfully!</Alert>}
      <Grid container spacing={2}>
       {
           bookings.map(booking=><Bookings key={booking.id} booking={booking} date={date} setBooksucc={setBooksucc}></Bookings>)
       }
      </Grid>
    </Box>
        </container>
    );
};

export default AvailableAppointments;