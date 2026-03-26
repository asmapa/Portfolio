import React, { useState } from 'react'

const Navbar = () => {

  const NavItems = [
    { id: 1, name: 'Home', link: '#Home' },
    { id: 2, name: 'Skills', link: '#Skills' },
    { id: 3, name: 'Hobbies', link: '#Project' },
    { id: 4, name: 'Project', link: '#Contact' }
  ]

  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">

      {/* Top Bar */}
      <div className="flex items-center justify-between px-5 py-4">

        {/* Logo */}
        <h1 className="text-white text-3xl font-bold">Portfolio</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8 text-white text-xl">
          {NavItems.map((e) => (
            <a key={e.id} href={e.link} className="hover:text-gray-400">
              {e.name}
            </a>
          ))}
        </nav>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-black text-white flex flex-col items-center gap-5 py-5">
          {NavItems.map((e) => (
            <a
              key={e.id}
              href={e.link}
              className="text-xl hover:text-gray-400"
              onClick={() => setIsOpen(false)} // close on click
            >
              {e.name}
            </a>
          ))}
        </div>
      )}

    </header>
  )
}

export default Navbar