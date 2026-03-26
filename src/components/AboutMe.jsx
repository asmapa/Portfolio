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
    <section className="w-full py-20 px-4 sm:px-6 lg:px-16">

      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* IMAGE */}
          <div 
            data-aos="fade-up" 
            className="flex justify-center md:justify-end"
          >
            <img
              src={asma}
              alt="Asma"
              className="w-[260px] sm:w-[320px] md:w-[380px] lg:w-[450px] xl:w-[500px] h-auto object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* TEXT */}
          <div 
            data-aos="fade-up" 
            className="text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>

            <p className="text-base sm:text-lg md:text-lg text-gray-700  leading-relaxed">
              👋 Hey there! I’m <span className="font-semibold text-red-600">Asma P A</span>, an introverted yet witty coder who thrives on 
              problem-solving and creativity. With a strong foundation in Computer Science and a diploma CGPA of <span className="font-semibold">9.77</span>, 
              I have honed my skills in full-stack development, designing seamless user experiences, and building efficient backend systems.
            </p>

            <p className="mt-4 text-base sm:text-lg md:text-lg text-gray-700 leading-relaxed">
              I believe in writing clean, scalable code and enjoy tackling complex challenges with a mix of logic and innovation. Whether it’s crafting 
              interactive web applications or optimizing databases, I’m always up for the next big problem to solve.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;