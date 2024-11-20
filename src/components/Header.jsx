import React, { useState } from 'react'
// import logo from '../assets/GG.png'
import { FaBars, FaTimes,FaGithub,FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'
import Resume from '../assets/GAYATHRI-GOPAKUMAR-MERN.pdf'



const Header = () => {
  const[nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)

  return (
    <div  className='fixed w-full h-[80px] flex justify-evenly items-center px-4 bg-[#08192f] text-gray-300'>
      {/* <div>
        <img src={logo} alt="logo" style={{width:'50px',height:'50px'}} className='rounded-full'/>
      </div> */}
      
        <ul className='hidden  md:flex'>
          <li className='px-4 cursor-pointer font-bold'>
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
          </li>
          <li className='px-4 cursor-pointer font-bold'>
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
          </li>
          <li className='px-4 cursor-pointer font-bold'>
              <Link to="skills" smooth={true} duration={500}>
                Skills
              </Link>
          </li>
          <li className='px-4 cursor-pointer font-bold'>
              <Link to="projects" smooth={true} duration={500}>
                Projects
              </Link>
          </li>
          <li className='px-4 cursor-pointer font-bold'>
              <Link to="contact" smooth={true} duration={500}>
                Contact
              </Link>
          </li>
        </ul>
      
      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav? <FaBars/> : <FaTimes/>}
      </div>
      {/* mobile */}
      <div className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-[#08192f] flex flex-col justify-center items-center'}>
        <ul>
            <li  className='py-6 text-3xl'>
              <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                Home
              </Link></li>
            <li className='py-6 text-3xl'>
              <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                About
              </Link></li>
            <li className='py-6 text-3xl'>
              <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                Skills
              </Link></li>
            <li className='py-6 text-3xl'>
              <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                Projects
              </Link></li>
            <li className='py-6 text-3xl'>
              <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                Contact
              </Link></li>
          </ul>
      </div>
      {/* social */}
      <div className='flex flex-col fixed top-[30%] left-0'>
          <ul>
            <li  className='w-[110px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[5px] duration-300 '>
              <a className='w-full h-[60px] flex justify-between items-center text-gray-200' href="https://www.linkedin.com/in/gayathrigopakumar/" target='_blank'>LinkedIn <FaLinkedinIn className='bg-blue-700 p-1' size={20}/></a>
            </li>
            <li className='w-[110px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[5px] duration-300 '>
              <a className='w-full h-[60px] flex justify-between items-center  text-gray-200' href="https://github.com/Gayathri-Gopakumar" target='_blank'>GitHub <FaGithub className='bg-gray-400 p-1' size={20}/></a>
            </li>
            
            <li className='w-[110px] h-[60px] flex justify-between items-center ml-[-85px] hover:ml-[5px] duration-300'>
              <a
                className='w-full h-[60px] flex justify-between items-center text-gray-200'
                href={Resume}
                download="Resume"
              >
                Resume <BsFillPersonLinesFill className='bg-gray-500 p-1' size={20} />
              </a>
            </li>

          </ul>

      </div>
        
    </div>
  )
}

export default Header