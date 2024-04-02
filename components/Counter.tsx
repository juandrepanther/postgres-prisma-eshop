'use client'

import React from 'react'
import { Box, Button } from '@mui/material'
import { useStore } from '@/store/store'

export default function Counter() {
  const counter = useStore((state) => state.counter)

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem', my: '1rem' }}>
      {counter}
      <Button variant="outlined" onClick={() => useStore.getState().increment()}>
        Increment
      </Button>
      <Button variant="outlined" onClick={() => useStore.getState().decrement()}>
        Decrement
      </Button>
    </Box>
  )
}
