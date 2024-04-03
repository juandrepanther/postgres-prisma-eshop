import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import { useStore } from '@/store/store'

export default function ProductCartItem({ image, price, title, id }: ProductType) {
  const { remove } = useStore((state) => state)

  const removeProductFromCart = () => remove(id)

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        backgroundColor: '#f4f5f7',
        borderRadius: '8px',
        padding: '1rem',
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'center',
        }}
      >
        <Image src={image} alt={title} width={70} height={70} />
        <Typography sx={{ fontWeight: 500 }}>{title}</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        <Typography sx={{ fontWeight: 500 }}>{price} EUR</Typography>
        <Button onClick={removeProductFromCart} color="warning" variant="outlined">
          Remove from Cart
        </Button>
      </Box>
    </Box>
  )
}
