import { ThemeProvider } from '@/context/Themecontext'
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Headers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <ThemeProvider>
          <Header/>
        {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
