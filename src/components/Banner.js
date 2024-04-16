import React from 'react';
// images
// import Image from '../assets/avatar.svg';
import Image from '../assets/round-img.png';
// icons
import { FaGithub,FaYoutube,FaDribbble, FaLinkedin, FaWhatsapp} from 'react-icons/fa'
//type animation
import {TypeAnimation} from 'react-type-animation'
//motion
import {motion} from 'framer-motion'
// variants
import {fadeIn} from '../variants'



function Banner() {
  return(
    <section className='min-h-[85vh] lg:min-h-[78vh] flex  ' id='home'>
      <div className='container mx-auto '>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-15'>
          {/* text */}
          <div className='flex-1 text-center  font-secondary  lg:text-left'>
            <motion.h1
             variants={fadeIn('right',0.5)} 
            initial='hidden' whileInView={'show'}
             viewport={{once:false,amount:0.8}} 
            className='text-[55px] font-bold leading-[0.9] lg:text-[110px]'>BISWAJIT<span>DEY</span>
            </motion.h1>
            <motion.div
             variants={fadeIn('up',0.4)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}}  className='mb-6 text-[40px] lg:text-[60px] font-secondary font-semibold  uppercase leading-[1]'>
              <span className=' text-white mr-0'>I am a </span>
            <TypeAnimation sequence={[
              'Developer',2000,                                                   
                                                        
              'Designer',2000,
              'PhotoGrapher',2000,
            ]}
            speed={50}
            className='text-accent' wrapper='span' repeat={Infinity}
            />
            </motion.div>
            <motion.p 
             variants={fadeIn('right',0.3)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} 
            className='mb-8 max-w-lg mx-auto  lg:mx-0'>we Developer with 2+ years experience that keep customers
            coming for about services make best effort. </motion.p>
            <motion.div  variants={fadeIn('up',0.6)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex max-w-max  gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact Me</button>
              <a href='#' className='text-gradient btn-link'> My Portfolio</a>
            </motion.div>
            {/* Social */}
            <motion.div  variants={fadeIn('right',0.8)} initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.7}} className='flex  text-[20px] gap-x-6 max-w-max mx-auto  lg:mx-0 '>
              
              <a href='https://github.com/Biswajit6997' target='blank'><FaGithub/></a>
              <a href='https://www.linkedin.com/in/biswajit-dey6997/' target='blank'><FaLinkedin/></a>
              <a href='#'><FaWhatsapp/></a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div  variants={fadeIn('down',0.5)} initial='hidden' whileInView={'show'}className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px] mix-blend-plus-lighter'>
            <img  className='h-[400px] w-[400px] 'src={Image} alt='profile image'>
          </img>
          </motion.div>
        </div>
      </div>

    </section>

);
   
}

export default Banner;
