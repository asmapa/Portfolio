import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import AboutMe from './components/AboutMe'
import Project from './components/Project'
import Contact from './components/Contact'
import Hobbies from './components/Hobbies'

import MainProject from './components/MainProject'

function App() {
 

  return (
    <>
   
      <main>
        <Hero />
        <Skills />
        <AboutMe />
        <Project />
        <Hobbies/>
        <MainProject />
        <Contact/>
     </main>
    </>
  )
}

export default App
