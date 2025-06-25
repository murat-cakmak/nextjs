import React from 'react'
import Header from '@/components/layout/header/Header'
import Footer from '@/components/layout/footer/Footer'

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({children}: RoutesLayoutProps) => {
  return (
      <div className='flex flex-col item-between justify-between min-h-screen bg-gray-100 text-gray-900'>
        <Header></Header>
        
        <main className='flex-grow container mx-auto px-4 py-8'>
          {children}
        </main>
        
        <Footer></Footer>
      </div>
  )
}

export default RoutesLayout
