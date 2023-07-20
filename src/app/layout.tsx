import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Webpage Dashboard',
  description: 'Responsive Dashboard',
}

export default function RootLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <html lang="en">
        <ToastContainer />
        <body className={inter.className}>{children}</body>
      </html>    
    </>
  )
}