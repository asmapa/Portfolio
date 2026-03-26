import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='text-black  body-font'>

      <div className='max-w-4xl mx-auto px-6 py-20 text-center'>

        {/* Heading */}
        <h1 className='text-3xl sm:text-4xl font-bold mb-4 text-red-500'>
          Let’s Connect 
        </h1>

        {/* Fun Subtext */}
        <p className='mb-6 text-lg'>
           You made it this far… respect!  
        </p>

        <p className='mb-6 text-base sm:text-lg'>
          💼 <span className='text-red-400 font-semibold'>Recruiter?</span>  
          I promise I’m more professional in meetings than in this portfolio  
        </p>

        <p className='mb-10 text-base sm:text-lg'>
          Got an idea, suggestion, or just want to talk about tech, career, or life?  
          Drop a message below  (I actually reply, not like some apps )
        </p>

        {/* Message Box */}
        <div className='flex flex-col gap-4 mb-10'>

          <input
            type="text"
            placeholder="Your Name 👤"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <input
            type="email"
            placeholder="Your Email 📧"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          />

          <textarea
            rows="4"
            placeholder="Your Message 💬 (be nice 😄)"
            className="p-3 rounded-lg bg-gray-800 text-white outline-none focus:ring-2 focus:ring-red-500"
          ></textarea>

          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition duration-300">
            Send Message 🚀
          </button>
        </div>

        {/* Contact Info */}
        <div className='flex flex-col md:flex-row items-center gap-8 text-lg'>

          <div className='flex items-center gap-2'>
            📧 <span className='font-semibold'>asmapa122002@gmail.com</span>
          </div>

        <a
    href="https://www.linkedin.com/in/asma-p-a-24099b249/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-blue-400 transition"
  >
    💼 <span className='font-semibold'>LinkedIn</span>
  </a>

  {/* GitHub */}
  <a
    href="https://github.com/asmapa"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 hover:text-gray-400 transition"
  >
    💻 <span className='font-semibold'>GitHub</span>
  </a>

        </div>

      </div>
    </section>
  )
}

export default Contact