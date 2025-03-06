
// // import { useState } from "react";
// // import { getFirestore, collection, addDoc } from "firebase/firestore";
// // import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// // export default function DoctorForm() {
// //   const [doctor, setDoctor] = useState({
// //     name: "",
// //     specialty: "",
// //     avgRating: "",
// //     totalRating: "",
// //     photo: null,
// //     totalPatients: "",
// //     hospital: ""
// //   });

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setDoctor({ ...doctor, [name]: value });
// //   };

// //   const handleFileChange = (e) => {
// //     setDoctor({ ...doctor, photo: e.target.files[0] });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const db = getFirestore();

// //       // Upload image if present
// //       let photoURL = "";
// //       if (doctor.photo) {
// //         const formData = new FormData();
// //         formData.append("file", doctor.photo);
// //         formData.append("upload_preset", "doctors_photos");

// //         const response = await fetch("https://api.cloudinary.com/v1_1/dw4vwx8bd/image/upload", {
// //           method: "POST",
// //           body: formData
// //         });

// //         const fileData = await response.json();
// //         photoURL = fileData.secure_url;
// //       }

// //       // Add doctor to Firestore
// //       await addDoc(collection(db, "doctors"), { ...doctor, photo: photoURL });

// //       alert("Doctor Details Added successfully");
// //       setDoctor({
// //         name: "",
// //         specialty: "",
// //         avgRating: "",
// //         totalRating: "",
// //         photo: null,
// //         totalPatients: "",
// //         hospital: ""
// //       });
// //     } catch (error) {
// //       console.error("Error adding doctor:", error);
// //     }
// //   };

// //   return (
// //     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
// //       <h2 className="text-xl font-bold mb-4">Doctor Information Form</h2>
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <input type="text" name="name" placeholder="Doctor's Name" value={doctor.name} onChange={handleChange} className="w-full p-2 border rounded" required />
// //         <input type="text" name="specialty" placeholder="Specialty" value={doctor.specialty} onChange={handleChange} className="w-full p-2 border rounded" required />
// //         <input type="number" name="avgRating" placeholder="Average Rating" value={doctor.avgRating} onChange={handleChange} className="w-full p-2 border rounded" step="0.1" required />
// //         <input type="number" name="totalRating" placeholder="Total Ratings" value={doctor.totalRating} onChange={handleChange} className="w-full p-2 border rounded" required />
// //         <input type="file" name="photo" onChange={handleFileChange} className="w-full p-2 border rounded" required />
// //         <input type="number" name="totalPatients" placeholder="Total Patients" value={doctor.totalPatients} onChange={handleChange} className="w-full p-2 border rounded" required />
// //         <input type="text" name="hospital" placeholder="Previous Hospital Name" value={doctor.hospital} onChange={handleChange} className="w-full p-2 border rounded" required />
// //         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
// //       </form>
// //     </div>
// //   );
// // }


// import { useState } from "react";
// import { getFirestore, collection, addDoc } from "firebase/firestore";
// import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// export default function DoctorForm() {
//   const [doctor, setDoctor] = useState({
//     name: "",
//     specialty: "",
//     avgRating: "",
//     totalRating: "",
//     photo: null,
//     totalPatients: "",
//     hospital: "",
//     duration: "",
//     education: "",
//     experience: "",
//     fee: "",
//     timeslots: []
//   });

//   const [timeslotInput, setTimeslotInput] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDoctor({ ...doctor, [name]: value });
//   };

//   const handleFileChange = (e) => {
//     setDoctor({ ...doctor, photo: e.target.files[0] });
//   };

//   const handleAddTimeslot = () => {
//     if (timeslotInput) {
//       setDoctor({ ...doctor, timeslots: [...doctor.timeslots, timeslotInput] });
//       setTimeslotInput("");
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const db = getFirestore();
//       let photoURL = "";
      
//       if (doctor.photo) {
//         const formData = new FormData();
//         formData.append("file", doctor.photo);
//         formData.append("upload_preset", "doctors_photos");

//         const response = await fetch("https://api.cloudinary.com/v1_1/dw4vwx8bd/image/upload", {
//           method: "POST",
//           body: formData
//         });

//         const fileData = await response.json();
//         photoURL = fileData.secure_url;
//       }

//       await addDoc(collection(db, "doctors"), { ...doctor, photo: photoURL });
      
//       alert("Doctor Details Added successfully");
//       setDoctor({
//         name: "",
//         specialty: "",
//         avgRating: "",
//         totalRating: "",
//         photo: null,
//         totalPatients: "",
//         hospital: "",
//         duration: "",
//         education: "",
//         experience: "",
//         fee: "",
//         timeslots: []
//       });
//     } catch (error) {
//       console.error("Error adding doctor:", error);
//     }
//   };

//   return (
//     <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md border border-gray-200">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Doctor Information Form</h2>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input type="text" name="name" placeholder="Doctor's Name" value={doctor.name} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="specialty" placeholder="Specialty" value={doctor.specialty} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="education" placeholder="Education" value={doctor.education} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="number" name="experience" placeholder="Years of Experience" value={doctor.experience} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="number" name="fee" placeholder="Consultation Fee" value={doctor.fee} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="duration" placeholder="Consultation Duration (e.g. 30 min)" value={doctor.duration} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="number" name="avgRating" placeholder="Average Rating" value={doctor.avgRating} onChange={handleChange} className="w-full p-2 border rounded" step="0.1" required />
//         <input type="number" name="totalRating" placeholder="Total Ratings" value={doctor.totalRating} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="file" name="photo" onChange={handleFileChange} className="w-full p-2 border rounded" required />
//         <input type="number" name="totalPatients" placeholder="Total Patients" value={doctor.totalPatients} onChange={handleChange} className="w-full p-2 border rounded" required />
//         <input type="text" name="hospital" placeholder="Previous Hospital Name" value={doctor.hospital} onChange={handleChange} className="w-full p-2 border rounded" required />
        
//         {/* Timeslot Input */}
//         <div className="flex items-center space-x-2">
//           <input type="datetime-local" value={timeslotInput} onChange={(e) => setTimeslotInput(e.target.value)} className="w-full p-2 border rounded" />
//           <button type="button" onClick={handleAddTimeslot} className="bg-green-500 text-white px-3 py-1 rounded">Add</button>
//         </div>
        
//         {/* Display Timeslots */}
//         <div className="bg-gray-100 p-2 rounded">
//           <h4 className="font-semibold mb-2">Added Timeslots:</h4>
//           <ul className="text-sm text-gray-600">
//             {doctor.timeslots.map((slot, index) => (
//               <li key={index}>{new Date(slot).toLocaleString()}</li>
//             ))}
//           </ul>
//         </div>
        
//         <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition">Submit</button>
//       </form>
//     </div>
//   );
// }

import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Timestamp } from "firebase/firestore";


export default function DoctorForm() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    education: "",
    experience: "",
    hospital: "",
    photo: null,
    avgRating: "",
    totalRating: "",
    duration: "",
    fee: "",
    totalPatients: "",
    timeslots: []
  });

  const [timeslot, setTimeslot] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleFileChange = (e) => {
    setDoctor({ ...doctor, photo: e.target.files[0] });
  };

  const addTimeslot = () => {
    if (timeslot) {
      setDoctor({ ...doctor, timeslots: [...doctor.timeslots, timeslot] });
      setTimeslot("");
    }
  };


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const db = getFirestore();

    // Upload image if present
    let photoURL = "";
    if (doctor.photo) {
      const formData = new FormData();
      formData.append("file", doctor.photo);
      formData.append("upload_preset", "doctors_photos");

      const response = await fetch("https://api.cloudinary.com/v1_1/dw4vwx8bd/image/upload", {
        method: "POST",
        body: formData
      });

      const fileData = await response.json();
      photoURL = fileData.secure_url;
    }

    // Convert timeslots to Firestore timestamps
    const timeslotTimestamps = doctor.timeslots.map(slot => Timestamp.fromDate(new Date(slot)));

    // Add doctor to Firestore
    await addDoc(collection(db, "doctors"), { 
      ...doctor, 
      photo: photoURL,
      timeslots: timeslotTimestamps  // Save timeslots as Firestore timestamps
    });

    alert("Doctor Details Added successfully");
    setDoctor({
      name: "",
      specialty: "",
      avgRating: "",
      totalRating: "",
      photo: null,
      totalPatients: "",
      hospital: "",
      duration: "",
      education: "",
      experience: "",
      fee: "",
      timeslots: [] // Reset timeslots
    });
  } catch (error) {
    console.error("Error adding doctor:", error);
  }
};


  return (
    <div className="max-w-3xl mx-auto p-6 bg-gradient-to-r from-blue-300 to-purple-400 rounded-lg shadow-md text-white">
      <h2 className="text-2xl font-bold mb-4 text-center">Doctor Registration Form</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Doctor Information Section */}
        <div className="p-4 bg-white rounded shadow-md text-black">
          <h3 className="text-xl font-semibold mb-3 text-blue-600">Doctor Information</h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="text" name="name" placeholder="Doctor's Name" value={doctor.name} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="specialty" placeholder="Specialty" value={doctor.specialty} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="education" placeholder="Education" value={doctor.education} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="experience" placeholder="Years of Experience" value={doctor.experience} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="hospital" placeholder="Previous Hospital Name" value={doctor.hospital} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="file" name="photo" onChange={handleFileChange} className="p-2 border rounded w-full" required />
          </div>
        </div>

        {/* Consultation Details Section */}
        <div className="p-4 bg-white rounded shadow-md text-black">
          <h3 className="text-xl font-semibold mb-3 text-green-600">Consultation Details</h3>
          <div className="grid grid-cols-2 gap-4">
            <input type="number" name="avgRating" placeholder="Average Rating" value={doctor.avgRating} onChange={handleChange} className="p-2 border rounded w-full" step="0.1" required />
            <input type="number" name="totalRating" placeholder="Total Ratings" value={doctor.totalRating} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="number" name="fee" placeholder="Consultation Fee" value={doctor.fee} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="number" name="totalPatients" placeholder="Total Patients Treated" value={doctor.totalPatients} onChange={handleChange} className="p-2 border rounded w-full" required />
            <input type="text" name="duration" placeholder="Consultation Duration (mins)" value={doctor.duration} onChange={handleChange} className="p-2 border rounded w-full" required />
          </div>
          {/* Timeslot Input */}
         <div className="flex items-center space-x-2">
           <input type="datetime-local" value={timeslot} onChange={(e) => setTimeslot(e.target.value)} className="w-full p-2 border rounded" />
           <button type="button" onClick={addTimeslot} className="bg-green-500 text-white px-3 py-1 rounded">Add</button>
         </div>
        
         {/* Display Timeslots */}
         <div className="bg-gray-100 p-2 rounded">
           <h4 className="font-semibold mb-2">Added Timeslots:</h4>
           <ul className="text-sm text-gray-600">
             {doctor.timeslots.map((slot, index) => (
               <li key={index}>{new Date(slot).toLocaleString()}</li>
             ))}
           </ul>
         </div>
        </div>

        <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded font-bold text-lg">Submit</button>
      </form>
    </div>
  );
}
