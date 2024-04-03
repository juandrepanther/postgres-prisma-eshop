import prisma from '@/lib/prisma'
import RefreshButton from './refresh-button'
import { Box, Container, Typography } from '@mui/material'
import ProductCard from './product-card'

export default async function ProductList() {
  const products = await prisma.product.findMany()

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '4rem' }}>
        <Box>
          <Typography sx={{ fontSize: '2rem', fontWeight: 700 }}>Recent Products</Typography>
        </Box>
        <RefreshButton />
      </Box>
      <Box
        sx={{
          my: '2rem',
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          justifyContent: { xs: 'center', md: 'space-between' },
        }}
      >
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Box>
    </Container>
  )
}
