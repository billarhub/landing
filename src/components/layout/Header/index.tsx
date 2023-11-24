import React from 'react'
import NavBar from '../NavBar'
import Logo from '@/components/atoms/Logo'

const Header = () => {
  return (
    <nav className=" bg-light w-full dark:bg-dark py-2 md:py-7 px-3 md:px-20">
         <div className="flex justify-between w-full items-center">
        <Logo />
        <ul className='flex gap-6'>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
        </ul>
        </div>
    </nav>
  )
}

export default Header