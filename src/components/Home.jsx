import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen bg-[#08192f] flex justify-center items-center px-4"
    >
      <div className="max-w-[1000px] w-full flex flex-col justify-center h-full px-4 sm:px-8 mx-auto">
        {/* Static Text */}
        <p className="text-base sm:text-lg md:text-xl font-bold text-gray-400 dynamic-hi">
          Hi, my name is <br />
          <span className="font-bold text-cyan-600 text-xl sm:text-2xl md:text-3xl lg:text-4xl dynamic-name">
            GAYATHRI GOPAKUMAR.
          </span>
        </p>

        {/* Typing Animation for Heading */}
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#8892b0] mt-2 dynamic-heading">
          I am a MERN stack developer.
        </h2>

        {/* <p className="text-sm sm:text-base md:text-lg text-[#8892b0] py-4 max-w-full sm:max-w-[600px] overflow-visible whitespace-normal break-words dynamic-paragraph">
          I am focused on building responsive web applications with sleek user interfaces.
        </p> */}


        {/* Button */}
        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group flex items-center border-2 px-4 py-2 sm:px-6 sm:py-3 my-3 hover:bg-cyan-800 hover:border-cyan-700">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;



