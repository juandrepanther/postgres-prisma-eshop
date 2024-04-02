import prisma from '@/lib/prisma'
import { timeAgo } from '@/lib/utils'
import Image from 'next/image'
import RefreshButton from './refresh-button'
import { Box, Container, Paper, Typography } from '@mui/material'
import Counter from './Counter'

export default async function Table() {
  const startTime = Date.now()
  const users = await prisma.users.findMany()
  const duration = Date.now() - startTime

  return (
    <Container maxWidth="lg">
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box>
          <Typography sx={{ fontWeight: 700 }}>Recent Users</Typography>
          <Typography>
            Fetched {users.length} users in {duration}ms from PostgreSQL + Prisma
          </Typography>
          <Counter />
        </Box>
        <RefreshButton />
      </Box>
      <Box sx={{ my: '2rem' }}>
        {users.map((user) => (
          <Paper
            elevation={6}
            sx={{
              backgroundColor: 'transparent',
              p: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              my: '1rem',
            }}
            key={user.name}
          >
            <Box>
              <Image
                style={{ borderRadius: '50%' }}
                src={user.image}
                alt={user.name}
                width={48}
                height={48}
              />
              <Box>
                <Typography>{user.name}</Typography>
                <Typography>{user.email}</Typography>
              </Box>
            </Box>
            <Typography>{timeAgo(user.createdAt)}</Typography>
          </Paper>
        ))}
      </Box>
    </Container>
  )
}
