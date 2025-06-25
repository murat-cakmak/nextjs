import React from 'react'
import Link from 'next/link'
import { Menu, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { User } from 'lucide-react'
import MobileMenu from './MobileMenu'

const Header = () => {
  return (
    <div className='bg-blue-500 shadow-sm top-0'>
        <div className='container mx-auto flex items-center justify-between px-4 py-3 font-600'>
            <Link href="/" className='text-white text-2xl font-bold'>Logo</Link>

            <nav className='hidden md:flex items-center space-x-4 font-semibold'>
                <Link href="/" className='text-white hover:underline'>Home</Link>
                <Link href="/about" className='text-white hover:underline'>About</Link>
                <Link href="/blog" className='text-white hover:underline'>Blog</Link>
                <Link href="/contact" className='text-white hover:underline'>Contact</Link>
            </nav>

            <div>
                <Button variant={'secondary'}>
                    <Search />
                </Button>

                <Link href="/login">
                    <Button variant='secondary' className='ml-2'>
                        <User />
                    </Button>
                </Link>

                <MobileMenu></MobileMenu>
            </div>
        </div>
    </div>
  )
}

export default Header