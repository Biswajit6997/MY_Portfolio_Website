// import React from 'react';
// // motion
// import {motion} from 'framer-motion'
// // varients
// import {fadeIn} from '../variants'
// // 



// const Contact = () => {
//   return (
//   <section className='py-16 lg:section lg:mt-48' id='contact'>
    
//     <div className='container mx-auto '>
//     <div className='flex flex-col lg:flex-row'>
//       {/* text */}

//       <motion.div variants={fadeIn('right',0.3)}
//           initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}} className='flex-1 flex justify-start items-start'>
//         <div> 
//           <h4 className='text-xl uppercase font-medium mb-2  h2 leading-tight  text-accent'>Get in touch</h4>
//           <h2 className='text-[45px] lg:text-[85px] leading-none mb-12 ' >Let's work <br/> together ! </h2>
//         </div>
//       </motion.div>
//       {/* form */}
//       <motion.form
//       variants={fadeIn('left',0.3)}
//       initial='hidden' whileInView={'show'} viewport={{once:false,amount:0.3}}
//        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start '>
//         <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent  transition-all' type='text ' placeholder='Your Name'/>
//         <input className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent  transition-all' type='text ' placeholder='Your Email'/>
//         <textarea className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent  transition-all resize-none mb-12' placeholder='Your Massege'></textarea>
//         <button className='btn btn-lg '>Send Massege</button>
        
//         </motion.form>
//     </div>
//     </div>
//     </section>
//     );
// };

// export default Contact;
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mayrlzdn");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <form onSubmit={handleSubmit} className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
      <input 
        id="name"
        type="text" 
        name="name"
        placeholder="Your Name"
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
      />
      <ValidationError 
        prefix="Name" 
        field="name"
        errors={state.errors}
      />
      <input 
        id="email"
        type="email" 
        name="email"
        placeholder="Your Email"
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea 
        id="message"
        name="message"
        placeholder="Your Message"
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} className='btn btn-lg'>Send Message</button>
    </form>
  );
}

const Contact = () => {
  return (
    <section className='py-16 lg:section lg:mt-48' id='contact'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div 
            variants={fadeIn('right', 0.3)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }} 
            className='flex-1 flex justify-start items-start'
          >
            <div> 
              <h4 className='text-xl uppercase font-medium mb-2 h2 leading-tight text-accent'>Get in touch</h4>
              <h2 className='text-[45px] lg:text-[85px] leading-none mb-12'>Let's work <br/> together ! </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden' 
            whileInView={'show'} 
            viewport={{ once: false, amount: 0.3 }} 
            className='flex-1'
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

