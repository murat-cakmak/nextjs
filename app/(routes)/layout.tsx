import React from 'react'

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({children}: RoutesLayoutProps) => {
  return (
    <html lang="en">
      <body>
        Header
        {children}
        Footer
      </body>
    </html>
  )
}

export default RoutesLayout
