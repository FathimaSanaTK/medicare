

// import React, { useEffect, useState } from 'react';
// import DoctorCard from '../components/doctors/DoctorCard';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const AdmDoctors = () => {
//   const [allDoctors, setAllDoctors] = useState([]);

//   const getAllDoctors = async () => {
//     const db = getFirestore();
//     const doctorsCollection = collection(db, "doctors");
//     const doctorsSnapshot = await getDocs(doctorsCollection);
//     const doctorsList = doctorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setAllDoctors(doctorsList);
//   };

//   useEffect(() => {
//     getAllDoctors();
//   }, []);

//   return (
//     <>
//       <section className="bg-[#fff9ea]">
//         <div className="container text-center">
//           <div className="max-w-[570px] mt-[30px] mx-auto bg-orange-200 rounded-md flex items-center justify-between">
//             <input
//               type="search"
//               className='pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
//               placeholder="Search Doctors"
//             />
//             <button className='btn mt-0 rounded rounded-r-md'>
//               Search
//             </button>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className='container'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
//             {allDoctors.map((doctor) => (
//               <DoctorCard key={doctor.id} doctor={doctor} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AdmDoctors;

// import React, { useEffect, useState } from 'react';
// import DoctorCard from '../components/doctors/DoctorCard';
// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// const AdmDoctors = () => {
//   const [allDoctors, setAllDoctors] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');
//   const [filteredDoctors, setFilteredDoctors] = useState([]);

//   const getAllDoctors = async () => {
//     const db = getFirestore();
//     const doctorsCollection = collection(db, "doctors");
//     const doctorsSnapshot = await getDocs(doctorsCollection);
//     const doctorsList = doctorsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//     setAllDoctors(doctorsList);
//     setFilteredDoctors(doctorsList);
//   };

//   useEffect(() => {
//     getAllDoctors();
//   }, []);

//   useEffect(() => {
//     const lowercasedQuery = searchQuery.toLowerCase();
//     const filtered = allDoctors.filter(doctor =>
//       doctor.name.toLowerCase().includes(lowercasedQuery) ||
//       doctor.specialty.toLowerCase().includes(lowercasedQuery)
//     );
//     setFilteredDoctors(filtered);
//   }, [searchQuery, allDoctors]);

//   return (
//     <>
//       <section className="bg-[#fff9ea]">
//         <div className="container text-center">
//           <div className="max-w-[570px] mt-[30px] mx-auto bg-orange-200 rounded-md flex items-center justify-between">
//             <input
//               type="search"
//               className='pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor'
//               placeholder="Search Doctors"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//             <button className='btn mt-0 rounded rounded-r-md'>
//               Search
//             </button>
//           </div>
//         </div>
//       </section>

//       <section>
//         <div className='container'>
//           <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4'>
//             {filteredDoctors.map((doctor) => (
//               <DoctorCard key={doctor.id} doctor={doctor} />
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default AdmDoctors;

import React, { useEffect, useState } from 'react';
import DoctorCard from '../components/doctors/DoctorCard';
import { getFirestore, collection, onSnapshot } from 'firebase/firestore';

const AdmDoctors = () => {
  const [allDoctors, setAllDoctors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const db = getFirestore();
    const doctorsCollection = collection(db, "doctors");

    // Using onSnapshot for real-time updates
    const unsubscribe = onSnapshot(doctorsCollection, (snapshot) => {
      const doctorsList = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setAllDoctors(doctorsList);
      setFilteredDoctors(doctorsList);
      setLoading(false);
    });

    return () => unsubscribe(); // Cleanup listener when component unmounts
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = allDoctors.filter(doctor =>
      doctor.name.toLowerCase().includes(lowercasedQuery) ||
      doctor.specialty.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredDoctors(filtered);
  }, [searchQuery, allDoctors]);

  return (
    <>
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <div className="max-w-[570px] mt-[30px] mx-auto bg-orange-200 rounded-md flex items-center justify-between">
            <input
              type="search"
              className="pl-4 pr-2 bg-transparent w-full focus:outline-none cursor-pointer placeholder:text-textColor"
              placeholder="Search Doctors"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded rounded-r-md"
              onClick={() => setFilteredDoctors(allDoctors.filter(doctor =>
                doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase())
              ))}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          {loading ? (
            <p className="text-center text-gray-600">Loading doctors...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:grid-cols-4">
              {filteredDoctors.length > 0 ? (
                filteredDoctors.map((doctor) => <DoctorCard key={doctor.id} doctor={doctor} />)
              ) : (
                <p className="text-center col-span-4 text-gray-600">No doctors found.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default AdmDoctors;
