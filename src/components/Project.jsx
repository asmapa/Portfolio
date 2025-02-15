import React from 'react'
import Frontend from '../assets/simon.png'
import Frontend_1 from '../assets/tiktakto.png'
import Frontend_2 from '../assets/flappy.png'
import Frontend_3 from '../assets/drumKit.png'

const ProjectCard = ({ image, title, link }) => (
    <div className='p-4 md:w-1/3 mb-6'>
        <div className='rounded-lg h-52 overflow-hidden'>
            <img src={image} alt="content" className='object-cover object-center h-full w-full' />
        </div>
        <h2 className='text-xl font-medium title-font text-white mt-5'>{title}</h2>
        <a href={link} target="_blank" rel="noopener noreferrer" className='text-blue-300 hover:text-blue-100 inline-flex items-center mt-3'>
            Fullscreen 
            <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-4 h-4 ml-2' viewBox='0 0 24 24'>
                <path d='M12 5l7 7-7 7'></path>
            </svg>
        </a>
    </div>
);

const Project = () => {
    const projects = [
        { title: 'Simon Game', image: Frontend, link: 'https://asmapa.github.io/Simon_game/' },
        { title: 'Tic Tac Toe', image: Frontend_1, link: 'https://asmapa.github.io/TIC_TAK_TOE/' },
        { title: 'Flappy Bird Game', image: Frontend_2, link: 'https://asmapa.github.io/Flappy_bird/' },
        { title: 'Drum Kit', image: Frontend_3, link: 'https://asmapa.github.io/Drum_kit/' },
    ];
    return (
        <div>
            <section id='projects' className='text-gray-400 bg-red-700 body-font'>
                <div className='container px-3 py-11 mx-auto'>
                    <div data-aos='fade-up' data-aos-delay='300' className='flex flex-col'>
                        <div className='flex flex-wrap sm:flex-row flex-col py-6 mb-12'>
                            <h1 className='sm:w-2/5 text-white font-medium title-font text-3xl mb-2 sm:mb-0'>
                                Do You Love Games? I Love Them!
                            </h1>
                            <p className='sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 font-bold'>
                                😂 Do you love games? Well, guess what—I made four! And they’re spectacularly simple 
                                (some might say foolish, but hey, fun is fun!). These mini-games won’t change your life, 
                                but they might just steal a few minutes of your time while making you question why you’re still playing.
                            </p>
                        </div>
                    </div>
                    <div data-aos='fade-up' data-aos-delay='400' className='flex flex-wrap sm:m-4 -mx-4 -mb-10 -mt-4'>
                        {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Project
