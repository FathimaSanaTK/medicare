import React from 'react'
import heroimg1 from '../assets/images/hero-img01.png'
import heroimg2 from '../assets/images/hero-img02.png'
import heroimg3 from '../assets/images/hero-img03.png'
import icon1 from '../assets/images/icon01.png'
import icon2 from '../assets/images/icon02.png'
import icon3 from '../assets/images/icon03.png'

import {Link} from 'react-router-dom'
import {BsArrowRight} from 'react-icons/bs'
import About from '../components/About'
import ServiceList from '../components/services/ServiceList'
import DoctorList from '../components/doctors/DoctorList'




const Home = () => {
  return (
    <>
      {/* hero section */}
      
        <section className='hero_section pt-[60px] 2xl:h-[800px]'>
          <div className='container'>
            <div className='flex flex-col lg:flex-row gap-[90px] items-center justify-between'>
              <div>
                <div className='lg:w-[570px]'>
                  <h1 className='text-[36px] leading-[36px] text-headingColor font-[800] md:text-[6
                    60px] md:leading-[70px]'>
                    We Help Patients Live a Healthy,Longer Life
                  </h1>
                  <p className='text_para'>We connect patients with experienced doctors, ensuring timely medical care for a healthier and longer life. Book appointments easily and take charge of your well-being today!</p>
                  
                  <Link to={'/doctors'}><button className='btn'>Request an Appointment</button>
                  </Link>
                  
                  </div>

                  <div className='flex'>

                  <div className='m-4 text-center'>
                    <h2 className='text-headingColor bg-red-500'>30+</h2>
                    <span></span>
                    <p className='text-black text-center'>Years of Experience</p>
                  </div>

                  <div className='m-4 text-center'>
                    <h2 className='text-headingColor bg-amber-300'>15+</h2>
                    <span></span>
                    <p className='text-black'>Clinic Location</p>
                  </div>

                  <div className='m-4 text-center'>
                    <h2 className='text-headingColor bg-green-500'>100%</h2>
                    <span></span>
                    <p className='text-black'>Patient Satisfaction</p>
                  </div>


                  </div>
              </div>
               
              <div className='flex gap-[30px] justify-end'>
                    <div>
                      <img className='w-full' src={heroimg1} alt="" />
                    </div>
                    <div className='mt-[30px]'>
                    <img className='w-full mb-[30px]' src={heroimg2} alt="" />
                    <img className='w-full' src={heroimg3} alt="" />


                    </div>
              </div>

            </div>

          </div>

        </section>

        
        <section>
          <div className='container'>
            <div className='lg:w-[470px] mx-auto '>
              <h2 className='heading text-center'>
                    Providing the Best Medical Services
              </h2>
              <p className='text_para text-center'>
              We offer top-quality medical services by connecting you with experienced doctors, ensuring expert care and convenience. Your health is our priority!
              </p>
              </div>

             <div className=' grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px] flex '>
              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                 <img src={icon1} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-center text-headingColor font-[700]'>
                    Find Doctor
                  </h2>
                  <p className='text-textColor text-center font-[400]'>
                  Easily find and book appointments with trusted doctors across various specialties, ensuring the best care for your needs.
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-blue-400 mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-blue-600'> 
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                 </Link>

                </div>

              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                 <img src={icon2} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-center text-headingColor font-[700]'>
                    Find Location
                  </h2>
                  <p className='text-textColor text-center font-[400]'>
                  Locate our nearby clinics and hospitals easily with our integrated map feature, ensuring quick access to medical care.
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-blue-400 mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-blue-600'> 
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                 </Link>

                </div>

              </div>

              <div className='py-[30px] px-5'>
                <div className='flex items-center justify-center'>
                 <img src={icon3} alt="" />
                </div>

                <div className='mt-[30px]'>
                  <h2 className='text-center text-headingColor font-[700]'>
                    Book Appointment
                  </h2>
                  <p className='text-textColor text-center font-[400]'>
                  Schedule your appointment with just a few clicks and get timely medical care at your convenience.
                  </p>
                  <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-blue-400 mt-[30px] mx-auto flex items-center 
                  justify-center group hover:bg-blue-600'> 
                    <BsArrowRight className='group-hover:text-white w-6 h-5' />
                 </Link>

                </div>

              </div>
             </div>

          </div>
        </section>


        {/* about section */}

        <About/>

        {/* services */}

        <section>
          <div className='container'>
            <div className='xl:w-[470px] mx-auto '>
              <h2 className='heading text-center'>Our Medical Services

              </h2>
              <p className='text_para text-center'> We provide comprehensive medical services, including general consultations, specialist care, and diagnostic support, ensuring quality healthcare for all. </p>

            </div>
           <ServiceList/>
          </div>
        </section>

        {/*  doctors and specialists*/}

        <section>
          <div className='container'>
          <div className='xl:w-[470px] mx-auto '>
              <h2 className='heading text-center'>Our Great Doctors </h2>
              <p className='text_para text-center'> Our team of highly skilled and experienced doctors is dedicated to providing compassionate care and effective treatments for all patients. </p>

            </div>
          <DoctorList/>
          </div>
        </section>



      



    </>
  )
}

export default Home