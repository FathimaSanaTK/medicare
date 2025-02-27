

import React, { useEffect, useState } from 'react';
import userimg from '../assets/images/avatar-icon.png';
import { useNavigate } from 'react-router-dom';
import MyBooking from './MyBooking';
import { firestore } from "../firebase"; 
import { collection, query, where, getDocs } from "firebase/firestore";

const MyAccount = () => {
  const [user, setUser] = useState(null); // State for user details
  const [profileImg, setProfileImg] = useState(userimg); // Default avatar
  const navigate = useNavigate();
  const userEmail = sessionStorage.getItem("email"); // Get logged-in user email

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (userEmail) {
        try {
          const q = query(collection(firestore, "patients"), where("email", "==", userEmail));
          const querySnapshot = await getDocs(q);

          if (!querySnapshot.empty) {
            const doc = querySnapshot.docs[0]; // Get the first matching document
            const userData = { ...doc.data(), documentId: doc.id }; // Include documentId
            setUser(userData);
            setProfileImg(userData.photo || userimg);
          } else {
            console.log("User not found in Firestore.");
          }
        } catch (error) {
          console.error("Error fetching user profile:", error);
        }
      }
    };

    fetchUserProfile();
  }, [userEmail]);

  const handleLogout = () => {
    sessionStorage.clear();
    navigate("/login");
  };

  return (
    <section className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Left Section - User Profile */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          {/* Profile Image */}
          <div className="flex flex-col items-center">
            <figure className="rounded-full w-32 h-32 border-4 border-gray-300 p-1">
              <img src={profileImg} alt="User Avatar" className="rounded-full w-full h-full object-cover" />
            </figure>

            <div className="text-center mt-4">
              <h3 className="text-2xl font-semibold text-gray-800">{user?.name || "N/A"}</h3>
              <p className="text-gray-500">{user?.email || "N/A"}</p>
            </div>
          </div>

          {/* User Details */}
          <div className="mt-6 space-y-4">
            <div className="bg-white p-3 rounded-lg border">
              <strong>Age:</strong> {user?.age || "N/A"}
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <strong>Phone:</strong> {user?.phone || "N/A"}
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <strong>Gender:</strong> {user?.gender || "N/A"}
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <strong>Allergy:</strong> {user?.allergy || "N/A"}
            </div>
            <div className="bg-white p-3 rounded-lg border">
              <strong>PatientId:</strong> {user?.documentId || "N/A"}
            </div>
          </div>

          {/* Logout Button */}
          <button onClick={handleLogout} className="mt-6 w-full px-6 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600">
            Logout
          </button>
        </div>

        {/* Right Section - My Bookings */}
        <div className="bg-gray-50 p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">My Bookings</h2>
          <MyBooking />
        </div>

      </div>
    </section>
  );
};

export default MyAccount;

