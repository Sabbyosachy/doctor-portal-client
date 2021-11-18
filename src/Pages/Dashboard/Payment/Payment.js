import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Checkoutform from './Checkoutform';


const stripePromise = loadStripe('pk_test_51JwICwH3sCeo9CTDR1NvgurAECJytaMPCNigljjXOqRpbjNB9kftwRtEZ523f4TL0zb1OpEoWJbjOD3C9rvHkizH00Kydvm5Kp')

const Payment = () => {
    const{appointmentId}=useParams();
    const [appoint,setAppoint]=useState({});
    useEffect(()=>{
          fetch(`https://protected-mesa-07765.herokuapp.com/appointments/${appointmentId}`)
          .then(res=>res.json())
          .then(data=>setAppoint(data));
    },[appointmentId])
    return (
        <div>
            <h3>{appoint.patientName}</h3>
            <h5>{appoint.serviceName}</h5>
            <h5>Pay : {appoint.price}</h5>
         {appoint?.price && <Elements stripe={stripePromise}>
      <Checkoutform appoint={appoint} />
    </Elements>}
        </div>
    );
};

export default Payment;




/*
1.installl strip npm react js and react
2.set publishible key
3.checkout form create 
4.Elements
5.payments settings
6.npm install in backend for payment
7.post api set
8.Confirm payment


*/ 