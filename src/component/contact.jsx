import React from 'react'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import Lottie from 'lottie-react'
import contact from '../assets/Contact.json'

const Contact = () => {
    function Submit(e) {
        e.preventDefault();
        const formEle = document.querySelector("form");
        console.log("submitted");
    
        const formData = new FormData(formEle);
        fetch('https://script.google.com/macros/s/AKfycbyF103_J5C46ngCKvWq8Cpw1YTvpSbzfp5_jN09wCvDDwoTLGPl2TyA8QpA_AHv4uxm/exec', {
            method: "POST",
            body: formData
        
        })
        .then((response) => {
          if (response.ok) {
            alert('Form submitted successfully!');
          } else {
            alert('Failed to submit the form.');
          }
        })
        .catch(() => {
          alert('An error occurred. Please try again.');
        });
    }
  return (
    <section id='contact' className='z-50 bg-gray-800 relative py-10 px-5 md:px-0'>
      <div className='mb-16 max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
            <div className='md:w-1/2 mb-8 ml-2 md:mb-0'>
              <h2 className='text-3xl font-bold mb-3 text-red-500'>Get in Touch</h2>
              <p className='mb-4 text-white/85'>I'm always open to new opportunities and collaboration. Feel free to reach out!</p>
              <div className='flex space-x-4'>
                <a href="https://www.facebook.com/abdabdullah11/" className='text-foreground/60 hover:text-foreground/80'>
                <img src={facebook} alt="" className='h-6 w-6'/></a>
                <a href="https://www.instagram.com/i_am_abd_" className='text-foreground/60 hover:text-foreground/80'>
                <img src={instagram} alt="" className='h-6 w-6'/></a>
                <a href="https://www.linkedin.com/in/i-am-abd/" className='text-foreground/60 hover:text-foreground/80'>
                <img src={linkedin} alt="" className='h-6 w-6'/></a>
              </div>
                <Lottie animationData={contact} className='w-[350px] mx-auto lg:w-[500px]'/>
            </div>
            <form className=' form w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10'
            onSubmit={(e) => {
                e.preventDefault(); // Prevent default form submission behavior
                Submit(e); // Call your submit logic
                e.target.reset(); // Reset all form fields
              }}>
              <h1 className='text-gray-900 text-4xl font-bold mb-7'>Contact Me</h1>
              <div className='mb-4'>
                <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                <input type="text"
                id="name"
                name="Name" placeholder='Full Name'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                <input type="email"
                id="email"
                name="Email" placeholder='Email'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Subject</label>
                <input type="text"
                id="subject"
                name="Subject" placeholder='Subject'  className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <div className='mb-4'>
                <label htmlFor="message" className='block text-sm font-medium text-gray-700'>Message</label>
                <textarea id="message"
                name="Message"  placeholder='Enter Your Message' className='mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50'/>
              </div>
              <button className='bg-red-500 text-white px-3 py-2 rounded-lg'>Send Message</button>
            </form>
        </div>
      </div>
    </section>
  )
}

export default Contact