'use client'
import { Montserrat } from 'next/font/google'
import { createTheme } from '@mui/material/styles'

const roboto = Montserrat({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
})

export default theme
