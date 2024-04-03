import { Suspense } from 'react'
import Table from '@/components/table'
import CircularProgress from '@mui/material/CircularProgress'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<CircularProgress />}>
        <Table />
      </Suspense>
    </main>
  )
}
