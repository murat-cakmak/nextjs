import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

const MobileMenu = () => {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button variant={'secondary'} className='ml-2 md:hidden'>
                <Menu />
            </Button>
        </SheetTrigger>
        <SheetContent>
            <SheetHeader>
            <SheetTitle className='mb-8'>
                <Link href="/" className='text-2xl font-bold'>Logo</Link>
            </SheetTitle>
            <nav className='flex flex-col items-start space-y-4 font-bold'>
                <Link href="/" className='text-black hover:underline'>Home</Link>
                <Link href="/about" className='text-black hover:underline'>About</Link>
                <Link href="/blog" className='text-black hover:underline'>Blog</Link>
                <Link href="/contact" className='text-black hover:underline'>Contact</Link>
            </nav>
            </SheetHeader>
        </SheetContent>
    </Sheet>
  )
}

export default MobileMenu