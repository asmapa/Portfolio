import React from 'react'

import im from "../assets/music.jpeg"
import photo from "../assets/photo.webp"

const Hobbies = () => {
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-10 mb-10'> Hobbies</h1>
    <div data-aos='fade-up' className='flex justify-center md:flex-row items-center gap-12 flex-col'>
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={im} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-6">🎵 Music - My Coding Fuel</h5>
        </a>
        <p className="mb-3  text-gray-700 dark:text-gray-400 my-9 font-bold">Some people drink coffee, some meditate... I plug in my headphones and let music charge my brain like a Tesla battery. 🚀
The right track? Boom! 100x coding speed unlocked. The wrong track? Well... let's just say, even my console.log starts throwing errors. 😅</p>
        
    </div>
          </div>
          





          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={photo} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white my-8">📸 Photography - Capturing the World, One Pixel at a Time</h5>
        </a>
        <p className="mb-3 font-bold text-gray-700 dark:text-gray-400 my-8 ">I don’t just write code, I capture moments. 📷 While some people carry DSLRs, I believe in the power of my phone camera—because it's not the gear, it’s the eye.
Check out my shots on Instagram. 🌟 If a picture is worth a thousand words, my gallery is a whole library! 📚</p>
        <a href="https://www.instagram.com/_captured_frames__/" className="inline-flex items-center px-3 py-2 my-6 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Explore My Page 
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
          </div>
          

            </div>
            </div>
  )
}

export default Hobbies
