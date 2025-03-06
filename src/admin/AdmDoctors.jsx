

import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/doctors/DoctorCard';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const AdmDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);

  const getAllDoctors = async () => {
    const db = getFirestore();
    const doctorsCollection = collection(db, "doctors");
    const doctorsSnapshot = await getDocs(doctorsCollection);
    const doctorsList = doctorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setAllDoctors(doctorsList);
  };

  useEffect(() => {
    getAllDoctors();
  }, []);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <div className="max-w-[570px] mt-[30px] mx-auto bg-orange-200 rounded-md flex items-center justify-between">
            <input
              type="search"
              className='pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
              placeholder="Search Doctors"
            />
            <button className='btn mt-0 rounded rounded-r-md'>
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
            {allDoctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AdmDoctors;
