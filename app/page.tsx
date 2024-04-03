import { Suspense } from 'react'
import ProductList from '@/components/product-list'
import Fallback from '@/components/fallback'

export const dynamic = 'force-dynamic'

export default function Home() {
  return (
    <main>
      <Suspense fallback={<Fallback />}>
        <ProductList />
      </Suspense>
    </main>
  )
}
