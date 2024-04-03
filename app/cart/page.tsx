'use client'

import React from 'react'
import { Box, Button, Container, Divider, Typography } from '@mui/material'
import { useStore } from '@/store/store'
import ProductCartItem from '@/components/product-cart-item'

export default function Page() {
  const products = useStore((state) => state.products)

  const totalPrice = products.reduce((total, product) => total + product.price, 0)

  return (
    <Container maxWidth="lg">
      <Typography sx={{ fontSize: '2rem', fontWeight: 500, textAlign: 'center', my: '2rem' }}>
        My Products
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem', mb: '2rem' }}>
        {products.map((product) => (
          <ProductCartItem key={product.id} {...product} />
        ))}
      </Box>
      <Divider variant="fullWidth" />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
          alignItems: 'center',
          gap: '2rem',
          my: '2rem',
        }}
      >
        <Button color="success" variant="contained">
          Buy
        </Button>
        <Typography sx={{ fontWeight: 800 }}>Total: {totalPrice} EUR</Typography>
      </Box>
    </Container>
  )
}
