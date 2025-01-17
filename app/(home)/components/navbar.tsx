import React from 'react'
import { Logo } from './logo'

export const Navbar = () => {
  return (
    <div className='z-50 bg-background fixed top-0 flex items-center w-full p-6 justify-between'>
        <Logo/>
    </div>
  )
}
