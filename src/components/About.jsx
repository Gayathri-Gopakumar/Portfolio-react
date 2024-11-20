import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-gray-500 bg-[#08192f]">
      <div className="flex flex-col justify-center items-center w-full h-full ">
        {/* About heading with cyan underline */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right font-bold text-gray-400 pl-6 pb-8 text-4xl underline underline-offset-3 decoration-cyan-700 ">
            <p>ABOUT</p>
          </div>
          <div></div> {/* Empty div to balance the grid */}
        </div>

        {/* Two-column content below the heading */}
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6">
          <div>
            <p>
              I am a Btech graduate in Electronics and Communications who found
              passion in the field of web development.
            </p>
          </div>
          <div>
            <p>
            During my 6-month internship, I gained hands-on experience in full-stack web development using the MERN  stack. I was involved in several projects that enhanced my technical skills and understanding of building scalable, efficient web applications. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

