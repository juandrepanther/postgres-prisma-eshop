import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider } from '@mui/material/styles'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import './globals.css'
import { Inter } from 'next/font/google'
import theme from '@/lib/theme'
import { CssBaseline } from '@mui/material'
import ResponsiveAppBar from '@/components/appbar'

export const metadata = {
  metadataBase: new URL('https://postgres-prisma.vercel.app'),
  title: 'Vercel Postgres Demo with Prisma',
  description: 'A simple Next.js app with Vercel Postgres as the database and Prisma as the ORM',
}

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <ToastContainer />
            <ResponsiveAppBar />
            {children}
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
