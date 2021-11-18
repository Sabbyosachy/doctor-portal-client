import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];

const Appointments = ({date}) => {
    const {user,token}=useAuth();
    const[appointments,setAppointments]=useState([]);
    useEffect(()=>{
        const url=`https://protected-mesa-07765.herokuapp.com/appointments?email=${user.email}&date=${date}`  
        fetch(url,{
          headers:{
            'authorization':`Bearer ${token}`
          }
        })
        .then(res=>res.json())
        .then(data=>{
            setAppointments(data)
        })
    },[date,token,user.email])
    return (
        <div>
            <h3>Appointments: {appointments.length}</h3>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Appoints Table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Date</TableCell>       
            <TableCell align="right">Service Name</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.patientName}
              </TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right">{row.serviceName}</TableCell>
              <TableCell align="right">{row.psyment ?'Paid': <Link to={`dashboard/payment/${row._id}`}><button>Pay</button></Link>}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    );
};

export default Appointments;