import React, { useEffect, useState } from 'react';
import { firestore } from '../firebase'; // Adjust based on your Firebase config location
import { collection, getDocs } from 'firebase/firestore';

function AdmPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, 'patients'));
        const patientList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setPatients(patientList);
      } catch (error) {
        console.error('Error fetching patients:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Registered Patients</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">UID</th>
              <th className="py-2 px-4">Phone</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Age</th>
              <th className="py-2 px-4">Gender</th>
              <th className="py-2 px-4">Allergy</th>
            </tr>
          </thead>
          <tbody>
            {patients.map(patient => (
              <tr key={patient.id} className="border-b text-center hover:bg-gray-100">
                <td className="py-2 px-4">{patient.name}</td>
                <td className="py-2 px-4">{patient.uid}</td>
                <td className="py-2 px-4">{patient.phone}</td>
                <td className="py-2 px-4">{patient.email}</td>
                <td className="py-2 px-4">{patient.age}</td>
                <td className="py-2 px-4">{patient.gender}</td>
                <td className="py-2 px-4">{patient.allergy || 'None'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdmPatients;
