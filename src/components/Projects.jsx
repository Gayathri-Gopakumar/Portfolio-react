import React from 'react';
import MediaPlayer from '../assets/media-player.png';
import eCart from '../assets/e-cart.png'
import projectFair from '../assets/project-fair.png'
import photographer from '../assets/photographer.png'
import marvel from '../assets/marvel.png'
import weather from '../assets/weather.png'
// import todo from '../assets/to-do.png'

const Projects = () => {
  return (
    <div name='projects' className='text-gray-500 bg-[#08192f] w-full md:h-screen'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full w-full'> 
        <div className='pb-6'>
          <p className='font-bold text-3xl inline border-b-4 border-cyan-700'>PROJECTS</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div 
            style={{
              backgroundImage: `url(${projectFair})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                MERN APPLICATION
              </span>
              <div className='pt-8 text-center'>
                <a href="https://melodious-conkies-94b68c.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/projectFair-App" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${MediaPlayer})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                REACT APPLICATION
              </span>
              <div className='pt-8 text-center'>
                <a href="https://neon-torte-6bd8cb.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/mediaPlayer" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${eCart})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                REACT APPLICATION
              </span>
              <div className='pt-8 text-center'>
                <a href="https://strong-cajeta-f29af6.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/eCart-Redux-Tailwind" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${photographer})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                HTML,CSS 
              </span>
              <div className='pt-8 text-center'>
                <a href="https://fantastic-hamster-385535.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/damien"  target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${weather})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                JS
              </span>
              <div className='pt-8 text-center'>
                <a href="https://sprightly-hamster-a2b117.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/weatherApp" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>

          <div 
            style={{
              backgroundImage: `url(${marvel})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              height: '250px',
            }} 
            className='shadow-lg shadow-[#040c16] group container rounded-md mx-auto flex justify-center items-center relative'>
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            {/* Hover Content */}
            <div className='opacity-0 group-hover:opacity-100 relative z-10 text-center'>
              <span className='text-2xl font-bold text-white tracking-wider'>
                REACT APPLICATION
              </span>
              <div className='pt-8 text-center'>
                <a href="https://glittery-bienenstitch-c3ae54.netlify.app/" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                </a>
                <a href="https://github.com/Gayathri-Gopakumar/deadpool" target='_blank'>
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default Projects;
