import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'
import Table from '@/components/table'
import TablePlaceholder from '@/components/table-placeholder'
import ExpandingArrow from '@/components/expanding-arrow'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<TablePlaceholder />}>
        <Table />
      </Suspense>
    </main>
  )
}
