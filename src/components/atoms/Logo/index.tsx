import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src='/logo-white.svg'  alt="Billarhub Logo"
    width={250}
    height={40} />
  )
}

export default Logo