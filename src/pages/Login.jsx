

// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import signup from '../assets/images/loginp.gif';
// // import { collection, getDocs, query, where } from '@firebase/firestore';
// // import { firestore, auth } from "../firebase"; // Import Firebase Auth
// // import { toast } from 'react-toastify';
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {

// //     useEffect(() => {
// //         const user = auth.currentUser;
// //         console.log(user);
// //     }, [auth])
    
     
// //     const [formData, setFormData] = useState({
// //         email: "",
// //         password: ""
// //     });

// //     const navigate = useNavigate();
// //     const usersCollection = collection(firestore, "patients");

// //     //console.log(formData);

// //     const handlelogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             // Query Firestore to check if email exists
// //             const q = query(usersCollection, where("email", "==", formData.email));
// //             const querySnapshot = await getDocs(q);

// //             if (!querySnapshot.empty) {
// //                 const userDoc = querySnapshot.docs[0]; // Get first matching document
// //                 const userData = userDoc.data(); // Get user data
// //                 const userId = userDoc.id; // Get Firestore document ID

// //                 // Check password
// //                 if (userData.password === formData.password) {
// //                     // alert("Login Successful!");
// //                     toast.success("Login Successful!", {
// //                         position: "top-right",
// //                         autoClose: 3000, // Toast disappears after 3s
// //                       })

// //                     // Store email and user ID in sessionStorage
// //                     sessionStorage.setItem("email", formData.email);
// //                     sessionStorage.setItem("userid", userId); // Store Firestore document ID

// //                     navigate('/doctors'); // Redirect to home page
// //                 } else {
// //                     toast.error("Incorrect password. Please try again.", {
// //                         position: "top-right", // You can change this to "top-center", "bottom-right", etc.
// //                         autoClose: 3000, // Closes after 3 seconds
// //                         hideProgressBar: false,
// //                         closeOnClick: true,
// //                         pauseOnHover: true,
// //                         draggable: true,
// //                         theme: "colored",
// //                       });
// //                 }
// //             } else {
// //                 toast.error("Email not registered. Please sign up.", {
// //                     position: "top-right",  // Position of the toast
// //                     autoClose: 3000,        // Closes after 3 seconds
// //                     hideProgressBar: false,
// //                     closeOnClick: true,
// //                     pauseOnHover: true,
// //                     draggable: true,
// //                     theme: "colored",
// //                   });
                  
// //                 navigate('/register'); // Redirect to registration page
// //             }
// //         } catch (error) {
// //             console.error("Error logging in:", error);
// //         }
// //     };

// //     return (
// //         <section className='px-5 lg:px-0'>
// //             <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
// //                 <div className='grid grid-cols-1 lg:grid-cols-2'>
// //                     {/* Left Side Image */}
// //                     <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
// //                         <figure className='rounded-l-lg'>
// //                             <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
// //                         </figure>
// //                     </div>

// //                     {/* Login Form */}
// //                     <form className='py-4 md:py-0 m-5' onSubmit={handlelogin}>
// //                         <h3 className='text-[22px] leading-9 font-bold mb-5'>
// //                             Hello! <span className='text-primaryColor'>Welcome</span>
// //                         </h3>
// //                         <div className='mb-5'>
// //                             <input
// //                                 type="email"
// //                                 className='form-control'
// //                                 onChange={e => setFormData({ ...formData, email: e.target.value })}
// //                                 placeholder='Enter Your Email'
// //                                 name='email'
// //                                 required
// //                             />
// //                         </div>
// //                         <div className='mb-5'>
// //                             <input
// //                                 type="password"
// //                                 className='form-control'
// //                                 onChange={e => setFormData({ ...formData, password: e.target.value })}
// //                                 placeholder='Enter Your Password'
// //                                 name='password'
// //                                 required
// //                             />
// //                         </div>

// //                         <div className='mb-3'>
// //                             <button type='submit' className='rounded-lg form-control bg-primaryColor text-black'>
// //                                 Login
// //                             </button>
// //                         </div>

// //                         <p className='text-textColor text-center'>
// //                             Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor'>Register</Link>
// //                         </p>
// //                     </form>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Login;

// // import React, { useEffect, useState } from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import signup from '../assets/images/loginp.gif';
// // import { auth } from "../firebase"; // Import Firebase Auth
// // import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// // import { toast } from 'react-toastify';
// // import "react-toastify/dist/ReactToastify.css";

// // const Login = () => {
// //     const [formData, setFormData] = useState({ email: "", password: "" });
// //     const navigate = useNavigate();

// //     // Check if the user is already authenticated
// //     useEffect(() => {
// //         const unsubscribe = onAuthStateChanged(auth, (user) => {
// //             if (user) {
// //                 console.log("Authenticated User:", user);
// //             } else {
// //                 console.log("No user is logged in.");
// //             }
// //         });
// //         return () => unsubscribe();
// //     }, []);

// //     const handleLogin = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
// //             const user = userCredential.user;

// //             toast.success("Login Successful!", {
// //                 position: "top-right",
// //                 autoClose: 3000,
// //             });

// //             // Store email and user ID in sessionStorage
// //             localStorage.setItem("email", user.email);
// //             localStorage.setItem("userid", user.uid);
// //             localStorage.setItem("role", user.role);
            

// //             if(localStorage.getItem('role')=='admin') {
// //                 navigate('/admin'); // Redirect to admin page
// //             }
// //             else {
// //                 navigate('/doctors'); // Redirect to doctors page
// //             }
// //         } catch (error) {
// //             console.error("Error logging in:", error.message);

// //             // Display appropriate error messages
// //             let errorMessage = "Login failed. Please try again.";
// //             if (error.code === "auth/user-not-found") {
// //                 errorMessage = "Email not registered. Please sign up.";
// //                 navigate('/register'); // Redirect to registration page
// //             } else if (error.code === "auth/wrong-password") {
// //                 errorMessage = "Incorrect password. Please try again.";
// //             } else if (error.code === "auth/invalid-email") {
// //                 errorMessage = "Invalid email format.";
// //             }

// //             toast.error(errorMessage, {
// //                 position: "top-right",
// //                 autoClose: 3000,
// //             });
// //         }
// //     };

// //     return (
// //         <section className='px-5 lg:px-0'>
// //             <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
// //                 <div className='grid grid-cols-1 lg:grid-cols-2'>
// //                     {/* Left Side Image */}
// //                     <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
// //                         <figure className='rounded-l-lg'>
// //                             <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
// //                         </figure>
// //                     </div>

// //                     {/* Login Form */}
// //                     <form className='py-4 md:py-0 m-5' onSubmit={handleLogin}>
// //                         <h3 className='text-[22px] leading-9 font-bold mb-5'>
// //                             Hello! <span className='text-primaryColor'>Welcome</span>
// //                         </h3>
// //                         <div className='mb-5'>
// //                             <input
// //                                 type="email"
// //                                 className='form-control'
// //                                 onChange={e => setFormData({ ...formData, email: e.target.value })}
// //                                 placeholder='Enter Your Email'
// //                                 name='email'
// //                                 required
// //                             />
// //                         </div>
// //                         <div className='mb-5'>
// //                             <input
// //                                 type="password"
// //                                 className='form-control'
// //                                 onChange={e => setFormData({ ...formData, password: e.target.value })}
// //                                 placeholder='Enter Your Password'
// //                                 name='password'
// //                                 required
// //                             />
// //                         </div>

// //                         <div className='mb-3'>
// //                             <button type='submit' className='rounded-lg form-control bg-primaryColor text-black'>
// //                                 Login
// //                             </button>
// //                         </div>

// //                         <p className='text-textColor text-center'>
// //                             Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor'>Register</Link>
// //                         </p>
// //                     </form>
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default Login;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import signup from '../assets/images/loginp.gif';
// import { auth, firestore } from "../firebase"; // Import Firestore
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { toast } from 'react-toastify';
// import { doc, getDoc } from "firebase/firestore"; // Firestore functions
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const [loading, setLoading] = useState(false);
//     const navigate = useNavigate();

//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log("Authenticated User:", user);
//             } else {
//                 console.log("No user is logged in.");
//             }
//         });
//         return () => unsubscribe();
//     }, []);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         setLoading(true);
        
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
//             const user = userCredential.user;

//             // Fetch role from Firestore
//             const userDoc = await getDoc(doc(firestore, "users", user.uid));
//             let role = userDoc.exists() ? userDoc.data().role : "user"; // Default to 'user' if role not found

//             // Store in localStorage
//             localStorage.setItem("email", user.email);
//             localStorage.setItem("userid", user.uid);
//             localStorage.setItem("role", role);

//             toast.success("Login Successful!", { position: "top-right", autoClose: 3000 });

//             // Navigate based on role
//             if (role === "admin") {
//                 navigate('/admin');
//             } else {
//                 navigate('/doctors');
//             }
//         } catch (error) {
//             console.error("Error logging in:", error.message);
//             let errorMessage = "Login failed. Please try again.";

//             if (error.code === "auth/user-not-found") {
//                 errorMessage = "Email not registered. Please sign up.";
//                 navigate('/register');
//             } else if (error.code === "auth/wrong-password") {
//                 errorMessage = "Incorrect password. Please try again.";
//             } else if (error.code === "auth/invalid-email") {
//                 errorMessage = "Invalid email format.";
//             }

//             toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <section className='px-5 lg:px-0'>
//             <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
//                 <div className='grid grid-cols-1 lg:grid-cols-2'>
//                     {/* Left Side Image */}
//                     <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
//                         <figure className='rounded-l-lg'>
//                             <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
//                         </figure>
//                     </div>

//                     {/* Login Form */}
//                     <form className='py-4 md:py-0 m-5' onSubmit={handleLogin}>
//                         <h3 className='text-[22px] leading-9 font-bold mb-5'>
//                             Hello! <span className='text-primaryColor'>Welcome</span>
//                         </h3>
//                         <div className='mb-5'>
//                             <input
//                                 type="email"
//                                 className='form-control'
//                                 onChange={e => setFormData({ ...formData, email: e.target.value })}
//                                 placeholder='Enter Your Email'
//                                 name='email'
//                                 required
//                             />
//                         </div>
//                         <div className='mb-5'>
//                             <input
//                                 type="password"
//                                 className='form-control'
//                                 onChange={e => setFormData({ ...formData, password: e.target.value })}
//                                 placeholder='Enter Your Password'
//                                 name='password'
//                                 required
//                             />
//                         </div>

//                         <div className='mb-3'>
//                             <button type='submit' className='rounded-lg form-control bg-primaryColor text-black' disabled={loading}>
//                                 {loading ? "Logging in..." : "Login"}
//                             </button>
//                         </div>

//                         <p className='text-textColor text-center'>
//                             Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor'>Register</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;

// import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import signup from '../assets/images/loginp.gif';
// import { auth, firestore } from "../firebase"; // Import Firestore DB
// import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
// import { doc, getDoc } from "firebase/firestore";
// import { toast } from 'react-toastify';
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//     const [formData, setFormData] = useState({ email: "", password: "" });
//     const navigate = useNavigate();

//     // Check if the user is already authenticated
//     useEffect(() => {
//         const unsubscribe = onAuthStateChanged(auth, (user) => {
//             if (user) {
//                 console.log("Authenticated User:", user);
//             } else {
//                 console.log("No user is logged in.");
//             }
//         });
//         return () => unsubscribe();
//     }, []);

//     const handleLogin = async (e) => {
//         e.preventDefault();
//         try {
//             const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
//             const user = userCredential.user;

//             toast.success("Login Successful!", {
//                 position: "top-right",
//                 autoClose: 3000,
//             });

//             // Fetch user role from Firestore (Patients Collection)
//             const userDocRef = doc(firestore, "patients", user.uid); // Change collection if necessary
//             const userDoc = await getDoc(userDocRef);

//             let role = "user"; // Default role if not found
//             if (userDoc.exists()) {
//                 role = userDoc.data().role || "user";
//             }

//             // Store email, user ID, and role in localStorage
//             localStorage.setItem("email", user.email);
//             localStorage.setItem("userid", user.uid);
//             localStorage.setItem("role", role);

//             // Navigate based on role
//             if (role === "admin") {
//                 navigate('/admin');
//             } else {
//                 navigate('/doctors');
//             }

//         } catch (error) {
//             console.error("Error logging in:", error.message);

//             // Display appropriate error messages
//             let errorMessage = "Login failed. Please try again.";
//             if (error.code === "auth/user-not-found") {
//                 errorMessage = "Email not registered. Please sign up.";
//                 navigate('/register'); // Redirect to registration page
//             } else if (error.code === "auth/wrong-password") {
//                 errorMessage = "Incorrect password. Please try again.";
//             } else if (error.code === "auth/invalid-email") {
//                 errorMessage = "Invalid email format.";
//             }

//             toast.error(errorMessage, {
//                 position: "top-right",
//                 autoClose: 3000,
//             });
//         }
//     };

//     return (
//         <section className='px-5 lg:px-0'>
//             <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
//                 <div className='grid grid-cols-1 lg:grid-cols-2'>
//                     {/* Left Side Image */}
//                     <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
//                         <figure className='rounded-l-lg'>
//                             <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
//                         </figure>
//                     </div>

//                     {/* Login Form */}
//                     <form className='py-4 md:py-0 m-5' onSubmit={handleLogin}>
//                         <h3 className='text-[22px] leading-9 font-bold mb-5'>
//                             Hello! <span className='text-primaryColor'>Welcome</span>
//                         </h3>
//                         <div className='mb-5'>
//                             <input
//                                 type="email"
//                                 className='form-control'
//                                 onChange={e => setFormData({ ...formData, email: e.target.value })}
//                                 placeholder='Enter Your Email'
//                                 name='email'
//                                 required
//                             />
//                         </div>
//                         <div className='mb-5'>
//                             <input
//                                 type="password"
//                                 className='form-control'
//                                 onChange={e => setFormData({ ...formData, password: e.target.value })}
//                                 placeholder='Enter Your Password'
//                                 name='password'
//                                 required
//                             />
//                         </div>

//                         <div className='mb-3'>
//                             <button type='submit' className='rounded-lg form-control bg-primaryColor text-black'>
//                                 Login
//                             </button>
//                         </div>

//                         <p className='text-textColor text-center'>
//                             Don&apos;t have an account? <Link to={'/register'} className='text-primaryColor'>Register</Link>
//                         </p>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Login;

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import signup from '../assets/images/loginp.gif';
import { auth, firestore } from "../firebase"; // Firestore DB import
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    // Check for existing user authentication
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const storedRole = localStorage.getItem("role");
                if (storedRole) {
                    navigate(storedRole === "admin" ? "/admin" : "/doctors");
                }
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const userCredential = await signInWithEmailAndPassword(auth, formData.email, formData.password);
            const user = userCredential.user;
            console.log(user);
            
            toast.success("Login Successful!", { position: "top-right", autoClose: 3000 });

            // Fetch user role from Firestore
            const userDocRef = doc(firestore, "patients", user.uid);
            const userDoc = await getDoc(userDocRef);

            const role = userDoc.exists() ? userDoc.data().role : "";
            console.log(role);
            

            // Store role and user details in localStorage
            localStorage.setItem("email", user.email);
            localStorage.setItem("userid", user.uid);
            localStorage.setItem("role", role);

            setFormData({
                email: "",
                password: ""
            })

            // Navigate based on role
            navigate(role === "admin" ? "/admin" : "/doctors");
        } catch (error) {
            console.error("Login Error:", error.message);
            let errorMessage = "Login failed. Please try again.";

            if (error.code === "auth/user-not-found") {
                errorMessage = "Email not registered. Please sign up.";
                navigate('/register');
            } else if (error.code === "auth/wrong-password") {
                errorMessage = "Incorrect password. Try again.";
            } else if (error.code === "auth/invalid-email") {
                errorMessage = "Invalid email format.";
            }

            toast.error(errorMessage, { position: "top-right", autoClose: 3000 });
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='px-5 lg:px-0'>
            <div className='w-full max-w-[1100px] mx-auto rounded-lg md:p-10'>
                <div className='grid grid-cols-1 lg:grid-cols-2'>
                    {/* Left Side - Image */}
                    <div className='hidden lg:block bg-primaryColor rounded-l-lg m-5'>
                        <figure className='rounded-l-lg'>
                            <img src={signup} alt="Signup" className='w-full rounded-l-lg' />
                        </figure>
                    </div>

                    {/* Login Form */}
                    <form className='py-4 md:py-0 m-5' onSubmit={handleLogin}>
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
                                value={formData.email || ""}
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
                                value={formData.password || ""}
                                required
                            />
                        </div>

                        <div className='mb-3'>
                            <button
                                type='submit'
                                className='rounded-lg form-control bg-primaryColor text-black'
                                disabled={loading}
                            >
                                {loading ? "Logging in..." : "Login"}
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
