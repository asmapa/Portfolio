import React from "react";
import Navbar from "./Navbar";
import me from "../assets/asma-removebg-preview.png";

const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[650px] flex flex-col items-center">

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[80vh] bg-gradient-to-r from-red-500 to-red-950 rounded-b-[40%] z-0"></div>

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-16 z-10"
      >

        {/* LEFT CONTENT */}
        <div className="flex-1 text-center md:text-left">

          {/* Small Intro */}
          <p className="text-gray-300 mb-2 text-lg">
             Hello, I'm
          </p>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Asma <span className="text-yellow-400">P A</span>
          </h1>

          {/* Tagline */}
          <p className="text-lg text-gray-300 mb-6">
            Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
            A passionate coder who loves turning ideas into reality through clean and efficient code.
            An introvert at heart but a problem-solver by nature — let my work speak louder than words.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mt-6">
            <a href="mailto:asmapa122002@gmail.com">
  <button className="bg-white text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition">
    Contact Me
  </button>
</a>

            <a href="/asma-cv.pdf" download>
  <button className="border border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
    Download CV
  </button>
</a>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0">
          <img
            src={me}
            alt="Hero"
           className="w-[320px] sm:w-[420px] md:w-[500px] lg:w-[800px] xl:w-[1000px] object-contain"
          />
        </div>

      </section>
    </div>
  );
};

export default Hero;