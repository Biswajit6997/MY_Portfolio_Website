import React from 'react'
import Logo from '../assets/vertical-logo.png'

const Header = () => {
  return (
    <div className='py-4'>
      <div className='container mx-auto '>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <a href='#'>
            <img  className='w-[auto] h-[130px] text-2xl 'src={Logo}/>
          </a>
          {/* botton */}
          <button className='btn btn-sm'>WorK With Me</button>
        </div>
      </div>
     </div>
  )
}

export default Header