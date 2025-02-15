import React from 'react'

const Navbar = () => {

    const NavItems = [
        {id:1 , name : 'Home',link : '#Home'},
        { id: 1, name: 'Skills', link: '#Skills' },
        { id: 1, name: 'Hobbies', link: '#Project' },
        {id:1 , name : 'Project',link : '#Contact'}
    ]
  return (
    <div>
          <header className='absolute top-0 flex justify-center items-center '>
              <div className='container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-center'>
                  <a className='flex title-font text-gray-900 mb-4 md:mb-0'>
                      <span className='ml-3 mr-11 font-bold text-white text-3xl'>Portfolio</span>
                  </a>

                  <nav className='md:ml-auto md:mr-auto font-medium flex flex-wrap items-center text-base text-white justify-center'>
                     {NavItems.map((e) => (
                        <a key={e.id} href={e.link} className="mr-6 hover:text-gray-400 text-2xl">
                            {e.name}
                        </a>
                    ))}

                  </nav>

                  <button>
                      
                  </button>
              </div>
      </header>
    </div>
  )
}

export default Navbar
