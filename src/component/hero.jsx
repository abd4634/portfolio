import React from 'react'
import hero from '../assets/Abd.jpeg'
import facebook from '../assets/facebook.png'
import twitter from '../assets/twitter.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
import reactLogo from '../assets/React.png'
import reduxLogo from '../assets/Redux.png'
import tailwind from '../assets/Tailwind.png'

const Hero = () => {
  return (
    <section className='relative'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col md:flex-row items-center lg:h-[90vh] justify-between' >
            <div className='md:w-1/2 mb-8 md:mb-0 flex flex-col space-y-4 px-6 lg:px-0 lg:mt-0 mt-10'>
               <h1 className='lg:text-7xl text-4xl font-bold lg:leading-snug'>Hi There, <br />I'm ABD<span className='text-red-500'>ULLAH</span></h1>
               <p className='md:text-2xl text-xl mb-4'>Web Developer & Designer</p>
               <p className='mb-4'>I specialize in creating user-friendly and dynamic web applications. With a strong foundation in modern web technologies, I bring ideas to life using React.js, ensuring seamless performance and intuitive user experiences.</p>
               <button className='bg-black text-white px-3 py-2 w-max rounded-md'><a href="https://drive.google.com/file/d/1ufFKGigemA2usgG0jlNGALW8H7zPENaq/view?usp=sharing" download target='_blank'>Download CV</a></button>
            </div>
            <div className='md:w-1/2 relative flex justify-center items-end'>
                 <img src={hero} alt="" className="w-35 h-35 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full object-cover" />
                 <img src={reactLogo} alt="" className='absolute w-10 top-36 left-0 rounded-full md:hidden'/>
                 <img src={reduxLogo} alt="" className='absolute w-10 top-0 right-5 md:hidden'/>
                 <img src={tailwind} alt="" className='absolute w-10 rounded-full right-0 bottom-36 md:hidden'/>
            </div>
        </div>
      </div>
      <div className='absolute top-40 right-10 hidden bg-gray-200 p-4 md:flex flex-col gap-6 rounded-full'>
      <a href="https://www.facebook.com/abdabdullah11/" target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="" className='w-20'/>
      </a> 
      <a href="https://www.instagram.com/i_am_abd_" target="_blank" rel="noopener noreferrer">
        <img src={instagram} alt="" className='w-20'/>
      </a>  
      <a href="https://x.com/i_am_abd_" target="_blank" rel="noopener noreferrer">
        <img src={twitter} alt="" className='w-20'/>
      </a>
      <a href="https://www.linkedin.com/in/i-am-abd/" target="_blank" rel="noopener noreferrer">
        <img src={linkedin} alt="" className='w-20'/>
      </a>
      </div>
    </section>
  )
}

export default Hero