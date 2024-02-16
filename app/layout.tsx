import type { Metadata } from 'next'
import './globals.css'
import Navbar from './nav/Navbar'
import ToasterProvider from '@/provider/ToasterProvider'
import SignalRProvider from '@/provider/SignalRProvider'
import { getCurrentUser } from './actions/authActions'


export const metadata: Metadata = {
  title: 'Carsbidi',
  description: 'Generated by create next app',
}

export default async function RootLayout({children}: {children: React.ReactNode})
{
  const user = await getCurrentUser();

  return (
    <html lang="en">
         
      <body className="">
      <ToasterProvider/>   
        <Navbar />
        <main className='container mx-auto px-5 pt-10'>
          <SignalRProvider user={user}>
              {children}
          </SignalRProvider>
        </main>        
      </body>
      
    </html>
  )
}