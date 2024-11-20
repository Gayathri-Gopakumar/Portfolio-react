import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#08192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/agddlgxb" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 sm:text-center'>
                <p className='  font-bold  text-4xl inline  border-b-4 border-cyan-700 text-gray-500'>CONTACT</p>
            </div>
            <input className='my-4 p-2 bg-gray-200'  type="text" placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-gray-200' type="email" placeholder='Email' name='email'/>
            <textarea className='my-4 p-2 bg-gray-200' name="message" id="" placeholder='Message'></textarea>
            <button className='text-white font-semibold border-2 p-2 w-auto border-cyan-800 bg-cyan-800 rounded-md hover:text-cyan-800 hover:bg-white mx-auto flex items-center'>Contact Me</button>
        </form>
    </div>
  )
}

export default Contact