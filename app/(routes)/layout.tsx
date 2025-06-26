import React from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'
import { ThemeProvider } from '@/components/theme-provider'

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({children}: RoutesLayoutProps) => {
  return (
      <div className='flex flex-col item-between justify-between min-h-screen'>
        <Header></Header>
        
        <main className='flex-grow container mx-auto px-4 py-8'>
          {children}
        </main>
        
        <Footer></Footer>
      </div>
  )
}

export default RoutesLayout
