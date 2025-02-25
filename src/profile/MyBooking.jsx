import React, { useEffect, useState } from 'react'
//import {Row} from 'react-router-dom'

const MyBooking = () => {

  const [booking,setBooking]=useState([])

  const getAllBookings=async()=>{
    
  }
console.log(booking);
  useEffect(()=>{
    getAllBookings()
  },[])



  return (

    <>
    <div className='text-danger text-center font-extrabold text-2xl'>My Bookings</div>

    
      {
        booking.map((item,index)=>(
         <div  key={index} className=' border-4 border-green-600 w-full text-center p-3 m-4'>
           <h2>{item.doctor.name}</h2>
          <p>{item.doctor.timeSlots[1]}</p>
         </div>
         
        ))
      }
   

    </>
  )
}

export default MyBooking