
import { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

export default function DoctorForm() {
  const [doctor, setDoctor] = useState({
    name: "",
    specialty: "",
    avgRating: "",
    totalRating: "",
    photo: null,
    totalPatients: "",
    hospital: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDoctor({ ...doctor, [name]: value });
  };

  const handleFileChange = (e) => {
    setDoctor({ ...doctor, photo: e.target.files[0] });
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

      // Add doctor to Firestore
      await addDoc(collection(db, "doctors"), { ...doctor, photo: photoURL });

      alert("Doctor Details Added successfully");
      setDoctor({
        name: "",
        specialty: "",
        avgRating: "",
        totalRating: "",
        photo: null,
        totalPatients: "",
        hospital: ""
      });
    } catch (error) {
      console.error("Error adding doctor:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Doctor Information Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Doctor's Name" value={doctor.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="specialty" placeholder="Specialty" value={doctor.specialty} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="number" name="avgRating" placeholder="Average Rating" value={doctor.avgRating} onChange={handleChange} className="w-full p-2 border rounded" step="0.1" required />
        <input type="number" name="totalRating" placeholder="Total Ratings" value={doctor.totalRating} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="file" name="photo" onChange={handleFileChange} className="w-full p-2 border rounded" required />
        <input type="number" name="totalPatients" placeholder="Total Patients" value={doctor.totalPatients} onChange={handleChange} className="w-full p-2 border rounded" required />
        <input type="text" name="hospital" placeholder="Previous Hospital Name" value={doctor.hospital} onChange={handleChange} className="w-full p-2 border rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Submit</button>
      </form>
    </div>
  );
}

