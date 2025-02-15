import React, { useEffect } from "react";
import asma from "../assets/ASMA.png";
import AOS from 'aos'
import 'aos/dist/aos.css'
const AboutMe = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
        });
    },[])
  return (
    <div className="max-w-5xl mx-auto px-6 lg:px-12 mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Section - Image */}
        <div data-aos="fade-up" data-aos-delay="300" className="flex justify-center lg:justify-end mb-40 mr-32">
          <img
            src={asma}
            className="w-[320px] h-[320px] sm:w-[400px] sm:h-[450px] md:w-[450px] md:h-[500px] object-cover rounded-2xl shadow-lg"
            alt="Asma P A"
          />
        </div>

        {/* Right Section - About Me Text */}
        <div data-aos="fade-up" data-aos-delay="400" className="text-center lg:text-left">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            👋 Hey there! I’m <span className="font-semibold text-red-600">Asma P A</span>, an introverted yet witty coder who thrives on 
            problem-solving and creativity. With a strong foundation in Computer Science and a diploma CGPA of <span className="font-semibold">9.77</span>, 
            I have honed my skills in full-stack development, designing seamless user experiences, and building efficient backend systems.
          </p>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            I believe in writing clean, scalable code and enjoy tackling complex challenges with a mix of logic and innovation. Whether it’s crafting 
            interactive web applications or optimizing databases, I’m always up for the next big problem to solve.
          </p>

          {/* Download CV Button */}
          <div className="mt-6">
            <a href="#" download>
              <button 
                data-aos="fade-up" data-aos-delay="500"
                className="bg-red-700 hover:bg-red-800 text-white font-semibold rounded-full px-6 py-3 text-sm shadow-md transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutMe;
