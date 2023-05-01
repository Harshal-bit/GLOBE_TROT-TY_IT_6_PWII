import { Nunito } from 'next/font/google'
import './globals.css'

import Navbar from '@/app/common/components/navbar/Navbar';
import LoginModal from '@/app/common/components/modals/LoginModal';
import RegisterModal from '@/app/common/components/modals/RegisterModal';
import RentModal from '@/app/common/components/modals/RentModal';



import Banner from './common/components/layout/Banner';

export const metadata = {
  title: 'GlobeTrot',
  description: 'One stop travel destination'
}

const font = Nunito({ 
  subsets: ['latin'], 
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <LoginModal />
        <RegisterModal />
        <RentModal/>
        
        {/* @ts-expect-error Server Component */}
        <Navbar />
        <Banner />
        {children}
      </body>
    </html>
  )
}
