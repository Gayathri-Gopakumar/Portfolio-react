import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import TAILWIND from '../assets/tailwind.png'
import JS from '../assets/javascript.png'
import REACT from '../assets/react.png'
import MONGO from '../assets/mongo.png'
import NODE from '../assets/node.png'
import MUI from '../assets/mui.png'
import EXPRESS from '../assets/express-js.png'

const Skills = () => {
  return (
    <div name='skills' className=" text-gray-500 bg-[#08192f] mx-auto ">
        <div className="max-w-[1000px] w-full min-h-screen -mt-8 text-gray-500 bg-[#08192f] pl-6 px-4 mx-auto flex flex-col justify-center">
            <div className='mt-10'>
                <p className='sm:text-right font-bold  text-4xl inline  border-b-4 border-cyan-700 '>SKILLS</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 '>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={HTML} alt="" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={CSS} alt="" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="" />
                    <p className='my-4'>TAILWIND CSS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={JS} alt="" />
                    <p className='my-4'>JS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={REACT} alt="" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={MONGO} alt="" />
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={NODE} alt="" />
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={EXPRESS} alt="" />
                    <p className='my-4'>EXPRESS js</p>
                </div>
                <div className='shadow-lg shadow-[#040c16] hover:scale-110 duration-500 p-3'>
                    <img className='w-20 mx-auto' src={MUI} alt="" />
                    <p className='my-4'>MATERIAL UI</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills