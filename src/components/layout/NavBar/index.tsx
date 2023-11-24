import React from 'react'

const NavBar = () => {
  return (
    <nav className=" bg-light w-full dark:bg-dark py-2 md:py-7 px-3 md:px-20">
        
        <ul className='flex gap-6'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
    </nav>
  )
}

export default NavBar