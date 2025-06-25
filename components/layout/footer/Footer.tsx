import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Linkedin, Icon, icons } from 'lucide-react'

const Footer = () => {
  return (
    <div className='bg-gray-800 text-white py-4 absolute bottom-0 w-full'>
        <div className='container mx-auto flex flex-col md:flex-row items-center justify-between'>
            <div className='text-center md:text-left'>
                <Link href="/" className="text-2xl text-white font-bold">
                    Logo
                </Link>

                <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <nav className='md:mt-0 mt-8 space-x-4 flex'>
                <Link href="/" className='text-white hover:underline'>Home</Link>
                <Link href="/about" className='text-white hover:underline'>About</Link>
                <Link href="/blog" className='text-white hover:underline'>Blog</Link>
                <Link href="/contact" className='text-white hover:underline'>Contact</Link>
            </nav>
            
            <div className='md:mt-0 mt-8 space-x-4'>
                <Button variant="secondary" size="icon"><Facebook></Facebook></Button>
                <Button variant="secondary" size="icon"><Instagram></Instagram></Button>
                <Button variant="secondary" size="icon"><Linkedin></Linkedin></Button>
            </div>
        </div>
    </div>
  )
}

export default Footer