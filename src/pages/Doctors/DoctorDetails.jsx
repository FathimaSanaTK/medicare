

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { firestore } from '../../firebase'; // Ensure correct Firebase config import
import { doc, getDoc } from 'firebase/firestore';
import star from '../../assets/images/star.png';
import DoctorAbout from '../../components/doctors/DoctorAbout';
import Feedback from '../../components/doctors/Feedback';
import SidePanel from '../../components/doctors/SidePanel';

const DoctorDetails = () => {
  const [tab, setTab] = useState("about");
  const [doctor, setDoctor] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const getDoctor = async () => {
      try {
        const doctorRef = doc(firestore, "doctors", id);
        const doctorSnap = await getDoc(doctorRef);

        if (doctorSnap.exists()) {
          setDoctor({ id: doctorSnap.id, ...doctorSnap.data() });
        } else {
          console.log("No such doctor found!");
        }
      } catch (error) {
        console.error("Error fetching doctor details:", error);
      }
    };

    getDoctor();
  }, [id]);

  if (!doctor) {
    return <div className="text-center text-xl font-semibold">Loading...</div>;
  }

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        <div className="grid md:grid-cols-4 gap-[50px]">
          <div className="md:col-span-2">
            <figure className="max-w-[200px] max-h-[200px]">
              <img src={doctor.photo} alt={doctor.name} className="w-full rounded-md" />
            </figure>
            <h3 className="text-headingColor text-[22px] font-bold">{doctor.name}</h3>
            <p className="text-[14px] text-gray-600 mt-2">{doctor.hospital}</p>
            <DoctorAbout doctor={doctor}/>

          </div>
          <SidePanel doctor={doctor} />
        </div>
      </div>
    </section>
  );
};

export default DoctorDetails;
