
import React, { useEffect, useState } from 'react';
import { collection, getDocs, query, where, doc, getDoc } from 'firebase/firestore';
import { firestore } from '../firebase'; // Ensure correct import

const MyBooking = () => {
  const [bookings, setBookings] = useState([]);
  const userId = sessionStorage.getItem("userid");

  const getAllBookings = async () => {
    if (!userId) {
      console.log("No user logged in.");
      return;
    }

    try {
      const bookingsCollection = collection(firestore, "bookings");
      const q = query(bookingsCollection, where("patientId", "==", userId));
      const querySnapshot = await getDocs(q);

      let userBookings = await Promise.all(
        querySnapshot.docs.map(async (docSnap) => {
          const bookingData = docSnap.data();

          // Convert Firestore timestamp to readable format (separating date and time)
          if (bookingData.timeslot && bookingData.timeslot.toDate) {
            const fullDate = bookingData.timeslot.toDate();
            bookingData.appointmentDate = fullDate.toLocaleDateString(); // Extract only date
            bookingData.timeslot = fullDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Extract only time
          }

          // Fetch doctor details if stored as an ID
          if (bookingData.doctorId) {
            const doctorRef = doc(firestore, "doctors", bookingData.doctorId);
            const doctorSnap = await getDoc(doctorRef);
            if (doctorSnap.exists()) {
              bookingData.doctor = doctorSnap.data(); // Attach doctor details
            }
          }

          return {
            id: docSnap.id,
            ...bookingData
          };
        })
      );

      setBookings(userBookings);
    } catch (error) {
      console.error("Error fetching bookings:", error);
    }
  };

  useEffect(() => {
    getAllBookings();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className='text-red-600 text-center font-extrabold text-2xl mb-4'>My Bookings</h1>

      {bookings.length > 0 ? (
        bookings.map((item, index) => (
          <div key={index} className='border-4 border-green-600 w-full text-center p-4 m-4 rounded-lg shadow-md'>
            <h2 className="text-lg font-bold text-blue-700">{item.doctor?.name || "Unknown Doctor"}</h2>
            <p className="text-gray-700"><strong>Appointment Date:</strong> {item.appointmentDate || "Not Provided"}</p>
            <p className="text-gray-700"><strong>Time Slot:</strong> {item.timeslot || "Not Available"}</p>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600 mt-5">No bookings found.</p>
      )}
    </div>
  );
};

export default MyBooking;
