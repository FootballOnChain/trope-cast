import Link from 'next/link'
import React from 'react'
import { Auth } from './auth'

export const NavBar = () => {
  return (
    <div className='border border-transparent border-b-primary bg-background p-3 fixed flex justify-between w-1/2 z-10'>
        <h1 className='font-bold text-xl my-auto'>Tropecast</h1>
        <Link href="https://docs.google.com/document/d/1zOlYt2P5aETsXTXbRNr6DUJwAmPmewM_4LA0SJmAXWQ/edit?usp=sharing" target='_blank' className='hover:underline my-auto'>White Paper</Link>
        <Auth />
    </div>
  )
}
