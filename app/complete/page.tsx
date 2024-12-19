'use client'

import React from 'react'
import { Box, Button, Container, Typography } from '@mui/material'
import DoneIcon from '@mui/icons-material/Done'
import { useRouter } from 'next/navigation'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'

export default function Page() {
  const router = useRouter()

  const home = () => router.push('/')

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <DoneIcon fontSize="large" color="success" />
        <Typography
          sx={{ fontSize: '2rem', fontWeight: 500, textAlign: 'center', my: '2rem', ml: '1rem' }}
        >
          Thanks for your Order
        </Typography>
      </Box>
      <Box sx={{ textAlign: 'center' }}>
        <Button variant="contained" onClick={home} startIcon={<ArrowBackIcon />}>
          View Products
        </Button>
      </Box>
    </Container>
  )
}
