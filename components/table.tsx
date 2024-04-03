import prisma from '@/lib/prisma'
import RefreshButton from './refresh-button'
import { Box, Container, Typography } from '@mui/material'
import Counter from './Counter'
import ProductCard from './product-card'

export default async function Table() {
  const startTime = Date.now()
  const products = await prisma.product.findMany()
  const duration = Date.now() - startTime

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between', my: '4rem' }}>
        <Box>
          <Typography sx={{ fontWeight: 700 }}>Recent Products</Typography>
          <Typography>
            Fetched {products.length} products in {duration}ms from PostgreSQL + Prisma
          </Typography>
          {/* <Counter /> */}
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
