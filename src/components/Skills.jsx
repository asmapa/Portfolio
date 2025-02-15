import React from 'react'
import { motion } from 'framer-motion'; // Import motion from framer-motion
import Marquee from 'react-fast-marquee';
import cprogram from '../assets/cprogram2-removebg-preview.png'
import dsa from '../assets/dsa-removebg-preview.png'
import java from '../assets/java-removebg-preview.png'
import web from '../assets/web-removebg-preview.png'
import tailwind from '../assets/tailwindcss-removebg-preview.png'
import r from '../assets/react-removebg-preview.png'
import mysql from '../assets/mysql-removebg-preview.png'
import python from '../assets/python-removebg-preview.png'
const Skills = () => {
  return (
    <div>
      <div className="md:px-14 w-full py-3 mt-6 px-0 mx-auto max-w-full">
      {/* Title Section */}
             
      
        <h2 className="text-3xl font-bold text-Navy text-center text-red-800 mb-6 uppercase">Skills</h2>
      

      {/* Marquee Section */}
    
        <Marquee className="w-full">
          <div className="flex items-center gap-36">
            <img src={cprogram} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={dsa} alt="IBM" className="h-36 w-auto object-contain" />

                      <img src={java} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={web} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={r} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={tailwind} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={mysql} alt="IBM" className="h-36 w-auto object-contain" />
                      <img src={python} alt="IBM" className="h-36 w-auto object-contain" />
                      
          </div>
        </Marquee>
   
    </div>
    </div>
  )
}

export default Skills
