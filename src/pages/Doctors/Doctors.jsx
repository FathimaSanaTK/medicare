import React, { useContext, useEffect, useState } from 'react'
import DoctorCard from '../../components/doctors/DoctorCard'




const Doctors = () => {
  //const [allDoctors,setAllDoctors]=useState([])

  const getAllDoctors = async () => {
    
    
  }

  useEffect(() => {
    getAllDoctors()
  }, [])

  return (

    <>
      <section className="bg-[#fff9ea]">
        <div className="container text—center" >

          <div className="max-w-[570px] mt-[30px] mx-auto bg-orange-200 rounded—md flex items—center justify-between">
            <input
              type="search"
              className='pl-4 pr-2 bg-transparent w-futl focus:outline-none cursor-pointer
 placeholder: text-textCoIor'
              placeholder="Search Doctors" />

            <button className='btn mt-0 rounded rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3
     gap-5 lg:grid-cols-4 '>
            {getDoctorResponse.map((doctor) =>
              <DoctorCard key={doctor._id} doctor={doctor} />)}
          </div>

        </div>
      </section>


    </>
  )
}

export default Doctors