// // // import React from 'react';
// // // import { Link, useLocation } from 'react-router-dom';
// // // import star from '../../assets/images/star.png';

// // // const DoctorCard = ({ doctor }) => {
// // //   const { id, name, specialty, avgRating, photo, hospital } = doctor;
// // //   const user = localStorage.getItem("email");
// // //   const location = useLocation();
// // //   const isAdminPage = location.pathname.startsWith("/admin");

// // //   return (
// // //     <div className='p-3 lg:p-5 bg-white shadow-lg rounded-lg text-center'>
// // //       <div className='w-full h-56 overflow-hidden rounded-md'>
// // //         <img src={photo} className='w-full h-full object-cover' alt={name} />
// // //       </div>

// // //       <h2 className='text-[18px] font-semibold mt-3'>{name}</h2>
// // //       <div className='flex justify-between items-center mt-2'>
// // //         <span className='bg-[#CCF0F3] px-3 py-1 rounded-md text-sm'>{specialty}</span>
// // //         <div className='flex items-center gap-1'>
// // //           <img src={star} className='w-4 h-4' alt='rating' />
// // //           <span className='text-sm font-medium'>{avgRating}</span>
// // //         </div>
// // //       </div>

// // //       <div className='mt-2'>
// // //         <span className='text-gray-600 text-sm'>{hospital}</span>
// // //         <div className='flex justify-center gap-4 mt-3'>

// // //           {!isAdminPage && ( // Hide "Book Now" button on admin page
// // //             user ? (
// // //               <Link to={`/doctors/${id}`}>
// // //                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
// // //                   Book Now
// // //                 </button>
// // //               </Link>
// // //             ) : (
// // //               <Link to={`/login`}>
// // //                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
// // //                   Book Now
// // //                 </button>
// // //               </Link>
// // //             )
// // //           )}

// // //           {isAdminPage && (
// // //             <div>
// // //               <button className='border border-blue-500 px-3 py-1 text-sm text-blue-500 rounded-md hover:bg-blue-500 hover:text-white'>
// // //               EDIT
// // //             </button>
// // //             <button className='border border-red-500 px-3 py-1 text-sm text-red-500 rounded-md hover:bg-red-500 hover:text-white'>
// // //               DELETE
// // //             </button>
// // //             </div>
// // //           )}

// // //         </div>
// // //       </div>
// // //     </div>
// // //   );
// // // };

// // // export default DoctorCard;
// // import React, { useState } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import Modal from "react-modal";
// // import { toast } from "react-toastify";
// // import star from "../../assets/images/star.png";
// // import { firestore } from "../../firebase";
// // import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// // Modal.setAppElement("#root"); // Prevent accessibility warning

// // const DoctorCard = ({ doctor, onDoctorUpdated, onDoctorDeleted }) => {
// //   const {
// //     id,
// //     name,
// //     about,
// //     specialty,
// //     avgRating,
// //     totalRating,
// //     photo,
// //     totalPatients,
// //     hospital,
// //     duration,
// //     education,
// //     experience,
// //     fee,
// //     timeslots,
// //   } = doctor;

// //   const user = sessionStorage.getItem("email");
// //   const location = useLocation();
// //   const isAdminPage = location.pathname.startsWith("/admin");

// //   // State for edit modal
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editedDoctor, setEditedDoctor] = useState({ ...doctor });

// //   // Handle input change
// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditedDoctor({ ...editedDoctor, [name]: value });
// //   };

// //   // Handle doctor update
// //   const handleUpdate = async () => {
// //     try {
// //       const doctorRef = doc(firestore, "doctors", id);
// //       await updateDoc(doctorRef, { ...editedDoctor });
// //       toast.success("Doctor details updated successfully!");
// //       onDoctorUpdated(id, editedDoctor); // Update UI without refresh
// //       setIsModalOpen(false);
// //     } catch (error) {
// //       console.error("Error updating doctor:", error);
// //       toast.error("Failed to update doctor.");
// //     }
// //   };

// //   // Handle doctor delete
// //   const handleDelete = async () => {
// //     const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
// //     if (confirmDelete) {
// //       try {
// //         const doctorRef = doc(firestore, "doctors", id);
// //         await deleteDoc(doctorRef);
// //         toast.success("Doctor deleted successfully!");
// //         onDoctorDeleted(id); // Remove doctor from UI instantly
// //       } catch (error) {
// //         console.error("Error deleting doctor:", error);
// //         toast.error("Failed to delete doctor.");
// //       }
// //     }
// //   };

// //   return (
// //     <div className="p-3 lg:p-5 bg-white shadow-lg rounded-lg text-center">
// //       <div className="w-full h-56 overflow-hidden rounded-md">
// //         <img src={photo} className="w-full h-full object-cover" alt={name} />
// //       </div>

// //       <h2 className="text-[18px] font-semibold mt-3">{name}</h2>
// //       <div className="flex justify-between items-center mt-2">
// //         <span className="bg-[#CCF0F3] px-3 py-1 rounded-md text-sm">{specialty}</span>
// //         <div className="flex items-center gap-1">
// //           <img src={star} className="w-4 h-4" alt="rating" />
// //           <span className="text-sm font-medium">{avgRating}</span>
// //         </div>
// //       </div>

// //       <div className="mt-2">
// //         <span className="text-gray-600 text-sm">{hospital}</span>
// //         <div className="flex justify-center gap-4 mt-3">
// //           {!isAdminPage &&
// //             (user ? (
// //               <Link to={`/doctors/${id}`}>
// //                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
// //                   Book Now
// //                 </button>
// //               </Link>
// //             ) : (
// //               <Link to={`/login`}>
// //                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
// //                   Book Now
// //                 </button>
// //               </Link>
// //             ))}

// //           {isAdminPage && (
// //             <div>
// //               <button
// //                 className="border border-blue-500 px-3 py-1 text-sm text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
// //                 onClick={() => setIsModalOpen(true)}
// //               >
// //                 EDIT
// //               </button>
// //               <button
// //                 className="border border-red-500 px-3 py-1 text-sm text-red-500 rounded-md hover:bg-red-500 hover:text-white ml-2"
// //                 onClick={handleDelete}
// //               >
// //                 DELETE
// //               </button>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* Edit Modal */}
// //       <Modal
// //         isOpen={isModalOpen}
// //         onRequestClose={() => setIsModalOpen(false)}
// //         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
// //       >
// //         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
// //           <h2 className="text-xl font-semibold mb-4">Edit Doctor Details</h2>
// //           <div className="space-y-3">
// //             <input type="text" name="name" value={editedDoctor.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" />
// //             <input type="text" name="about" value={editedDoctor.about} onChange={handleChange} className="w-full p-2 border rounded" placeholder="About" />
// //             <input type="text" name="specialty" value={editedDoctor.specialty} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Specialty" />
// //             <input type="number" name="avgRating" value={editedDoctor.avgRating} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Average Rating" />
// //             <input type="number" name="totalRating" value={editedDoctor.totalRating} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Total Rating" />
// //             <input type="text" name="photo" value={editedDoctor.photo} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Photo URL" />
// //             <input type="text" name="totalPatients" value={editedDoctor.totalPatients} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Total Patients" />
// //             <input type="text" name="hospital" value={editedDoctor.hospital} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Hospital" />
// //             <input type="text" name="duration" value={editedDoctor.duration} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Duration" />
// //             <input type="text" name="education" value={editedDoctor.education} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Education" />
// //             <input type="text" name="experience" value={editedDoctor.experience} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Experience" />
// //             <input type="number" name="fee" value={editedDoctor.fee} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Fee" />
// //             <input type="text" name="timeslots" value={editedDoctor.timeslots} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Time Slots" />
// //           </div>
// //           <div className="flex justify-end gap-2 mt-4">
// //             <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
// //             <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
// //           </div>
// //         </div>
// //       </Modal>
// //     </div>
// //   );
// // };

// // export default DoctorCard;

// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";
// import Modal from "react-modal";
// import { toast } from "react-toastify";
// import star from "../../assets/images/star.png";
// import { firestore } from "../../firebase";
// import { doc, updateDoc, deleteDoc } from "firebase/firestore";

// Modal.setAppElement("#root");

// const DoctorCard = ({ doctor, onDoctorUpdated, onDoctorDeleted }) => {
//   const {
//     id,
//     name,
//     about,
//     specialty,
//     avgRating,
//     totalRating,
//     photo,
//     totalPatients,
//     hospital,
//     duration,
//     education,
//     experience,
//     fee,
//     timeslots,
//   } = doctor;

//   const user = sessionStorage.getItem("email");
//   const location = useLocation();
//   const isAdminPage = location.pathname.startsWith("/admin");

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editedDoctor, setEditedDoctor] = useState({ ...doctor });
//   const [selectedFile, setSelectedFile] = useState(null);

//   // Handle input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setEditedDoctor({ ...editedDoctor, [name]: value });
//   };

//   // Handle file upload
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setSelectedFile(file);
//   };

//   // Handle doctor update
//   const handleUpdate = async () => {
//     try {
//       const doctorRef = doc(firestore, "doctors", id);
//       await updateDoc(doctorRef, {
//         ...editedDoctor,
//         photo: selectedFile ? URL.createObjectURL(selectedFile) : editedDoctor.photo,
//       });

//       toast.success("Doctor details updated successfully!");
//       onDoctorUpdated(id, editedDoctor);
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error("Error updating doctor:", error);
//       toast.error("Failed to update doctor.");
//     }
//   };

//   // Handle doctor delete
//   const handleDelete = async () => {
//     const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
//     if (confirmDelete) {
//       try {
//         const doctorRef = doc(firestore, "doctors", id);
//         await deleteDoc(doctorRef);
//         toast.success("Doctor deleted successfully!");
//         onDoctorDeleted(id);
//       } catch (error) {
//         console.error("Error deleting doctor:", error);
//         toast.error("Failed to delete doctor.");
//       }
//     }
//   };

//   return (
//     <div className="p-3 lg:p-5 bg-white shadow-lg rounded-lg text-center">
//       <div className="w-full h-56 overflow-hidden rounded-md">
//         <img src={photo} className="w-full h-full object-cover" alt={name} />
//       </div>

//       <h2 className="text-[18px] font-semibold mt-3">{name}</h2>
//       <div className="flex justify-between items-center mt-2">
//         <span className="bg-[#CCF0F3] px-3 py-1 rounded-md text-sm">{specialty}</span>
//         <div className="flex items-center gap-1">
//           <img src={star} className="w-4 h-4" alt="rating" />
//           <span className="text-sm font-medium">{avgRating}</span>
//         </div>
//       </div>

//       <div className="mt-2">
//         <span className="text-gray-600 text-sm">{hospital}</span>
//         <div className="flex justify-center gap-4 mt-3">
//           {!isAdminPage &&
//             (user ? (
//               <Link to={`/doctors/${id}`}>
//                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700">
//                   Book Now
//                 </button>
//               </Link>
//             ) : (
//               <Link to={`/login`}>
//                 <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700">
//                   Book Now
//                 </button>
//               </Link>
//             ))}

//           {isAdminPage && (
//             <div>
//               <button
//                 className="border border-blue-500 px-3 py-1 text-sm text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 EDIT
//               </button>
//               <button
//                 className="border border-red-500 px-3 py-1 text-sm text-red-500 rounded-md hover:bg-red-500 hover:text-white ml-2"
//                 onClick={handleDelete}
//               >
//                 DELETE
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Edit Modal */}
//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={() => setIsModalOpen(false)}
//         className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
//       >
//         <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
//           <h2 className="text-xl font-semibold mb-4">Edit Doctor Details</h2>

//           <div className="space-y-3 max-h-[70vh] overflow-y-auto p-2">
//             <input type="text" name="name" value={editedDoctor.name} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Name" />
//             <textarea name="about" value={editedDoctor.about} onChange={handleChange} className="w-full p-2 border rounded" placeholder="About"></textarea>
//             <input type="text" name="specialty" value={editedDoctor.specialty} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Specialty" />
//             <input type="number" name="avgRating" value={editedDoctor.avgRating} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Average Rating" />
//             <input type="text" name="hospital" value={editedDoctor.hospital} onChange={handleChange} className="w-full p-2 border rounded" placeholder="Hospital" />

//             {/* File Upload */}
//             <label className="block text-sm font-medium text-gray-700">Upload New Photo:</label>
//             <input type="file" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />

//             {selectedFile && (
//               <img src={URL.createObjectURL(selectedFile)} className="w-24 h-24 object-cover rounded mt-2" alt="Preview" />
//             )}
//           </div>

//           {/* Sticky Footer */}
//           <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t flex justify-end gap-2">
//             <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded">Cancel</button>
//             <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded">Save</button>
//           </div>
//         </div>
//       </Modal>
//     </div>
//   );
// };

// export default DoctorCard;

import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { doc, updateDoc, deleteDoc } from "firebase/firestore";
import { firestore } from "../../firebase"; // Import Firebase setup
import { toast } from "react-toastify";
import Modal from "react-modal";
import star from "../../assets/images/star.png";

Modal.setAppElement("#root"); // Prevents accessibility issues

const DoctorCard = ({ doctor, onDoctorUpdated, onDoctorDeleted }) => {
  const { id, name, specialty, avgRating, photo, hospital } = doctor;
  const user = localStorage.getItem("email");
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith("/admin");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedDoctor, setEditedDoctor] = useState({ ...doctor });
  const [selectedFile, setSelectedFile] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDoctor({ ...editedDoctor, [name]: value });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  // Handle update
  const handleUpdate = async () => {
    try {
      const doctorRef = doc(firestore, "doctors", id);
      await updateDoc(doctorRef, {
        ...editedDoctor,
        photo: selectedFile ? URL.createObjectURL(selectedFile) : editedDoctor.photo,
      });

      toast.success("Doctor details updated!");
      onDoctorUpdated(id, editedDoctor);
      setIsModalOpen(false);
    } catch (error) {
      console.error("Update error:", error);
      toast.error("Update failed!");
    }
  };

  // Handle delete
  const handleDelete = async () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this doctor?");
    if (confirmDelete) {
      try {
        // Remove from UI first
        onDoctorDeleted(id);

        // Delete from Firebase
        const doctorRef = doc(firestore, "doctors", id);
        await deleteDoc(doctorRef);

        toast.success("Doctor deleted successfully!");
      } catch (error) {
        console.error("Error deleting doctor:", error);
        toast.error("Failed to delete doctor.");
      }
    }
  };

  return (
    <div className="p-3 lg:p-5 bg-white shadow-lg rounded-lg text-center">
      <div className="w-full h-56 overflow-hidden rounded-md">
        <img src={photo} className="w-full h-full object-cover" alt={name} />
      </div>

      <h2 className="text-[18px] font-semibold mt-3">{name}</h2>
      <div className="flex justify-between items-center mt-2">
        <span className="bg-[#CCF0F3] px-3 py-1 rounded-md text-sm">{specialty}</span>
        <div className="flex items-center gap-1">
          <img src={star} className="w-4 h-4" alt="rating" />
          <span className="text-sm font-medium">{avgRating}</span>
        </div>
      </div>

      <div className="mt-2">
        <span className="text-gray-600 text-sm">{hospital}</span>
        <div className="flex justify-center gap-4 mt-3">
          {!isAdminPage && (
            user ? (
              <Link to={`/doctors/${id}`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
                  Book Now
                </button>
              </Link>
            ) : (
              <Link to={`/login`}>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-blue-700 whitespace-nowrap">
                  Book Now
                </button>
              </Link>
            )
          )}

          {isAdminPage && (
            <div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border border-blue-500 px-3 py-1 text-sm text-blue-500 rounded-md hover:bg-blue-500 hover:text-white"
              >
                EDIT
              </button>
              <button
                onClick={handleDelete}
                className="border border-red-500 px-3 py-1 text-sm text-red-500 rounded-md hover:bg-red-500 hover:text-white"
              >
                DELETE
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
      >
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg relative">
          <h2 className="text-xl font-semibold mb-4">Edit Doctor Details</h2>

          <div className="space-y-3 max-h-[60vh] overflow-y-auto p-2">
            <input
              type="text"
              name="name"
              value={editedDoctor.name}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <textarea
              name="about"
              value={editedDoctor.about}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            ></textarea>
            <input
              type="text"
              name="specialty"
              value={editedDoctor.specialty}
              onChange={handleChange}
              className="w-full p-2 border rounded"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full p-2 border rounded"
            />

            {selectedFile && (
              <img src={URL.createObjectURL(selectedFile)} className="w-24 h-24 object-cover rounded mt-2" />
            )}
          </div>

          {/* Sticky Buttons */}
          <div className="absolute bottom-0 left-0 right-0 bg-white p-4 border-t flex justify-end gap-2">
            <button onClick={() => setIsModalOpen(false)} className="px-4 py-2 bg-gray-400 text-white rounded">
              Cancel
            </button>
            <button onClick={handleUpdate} className="px-4 py-2 bg-blue-500 text-white rounded">
              Save
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DoctorCard;
