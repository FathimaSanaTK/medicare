

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/images/loginp.gif';
import { collection, getDocs, query, where } from '@firebase/firestore';
import { firestore } from '../firebase'; // Ensure correct import

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });

    const navigate = useNavigate();
    const usersCollection = collection(firestore, "patients");

    console.log(formData);

    const handlelogin = async (e) => {
        e.preventDefault();
        try {
            // Query Firestore to check if email exists
            const q = query(usersCollection, where("email", "==", formData.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0]; // Get first matching document
                const userData = userDoc.data(); // Get user data
                const userId = userDoc.id; // Get Firestore document ID

                // Check password
                if (userData.password === formData.password) {
                    alert("Login Successful!");

                    // Store email and user ID in sessionStorage
                    sessionStorage.setItem("email", formData.email);
                    sessionStorage.setItem("userid", userId); // Store Firestore document ID

                    navigate('/doctors'); // Redirect to home page
                } else {
                    alert("Incorrect password. Please try again.");
                }
            } else {
                alert("Email not registered. Please sign up.");
                navigate('/register'); // Redirect to registration page
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Left Side Image */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
                        <figure className='rounded-l-lg'>
                            <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    {/* Login Form */}
                    <form className='py-4 md:py-0 m-5' onSubmit={handlelogin}>
                        <h3 className='text-[22px] leading-9 font-bold mb-5'>
                            Hello! <span className='text-primaryColor'>Welcome</span>
                        </h3>
                        <div className='mb-5'>
                            <input
                                type="email"
                                className='form-control'
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                placeholder='Enter Your Email'
                                name='email'
                                required
                            />
                        </div>
                        <div className='mb-5'>
                            <input
                                type="password"
                                className='form-control'
                                onChange={e => setFormData({ ...formData, password: e.target.value })}
                                placeholder='Enter Your Password'
                                name='password'
                                required
                            />
                        </div>

                        <div className='mb-3'>
                            <button type='submit' className='rounded-lg form-control bg-primaryColor text-black'>
                                Login
                            </button>
                        </div>

                        <p className='text-textColor text-center'>
                            Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor'>Register</Link>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Login;
