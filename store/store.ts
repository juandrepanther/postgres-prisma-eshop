import { ProductType } from '@/lib/types'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'

interface Props {
  products: ProductType[]
  add: (newProduct: ProductType) => void
  remove: (id: number) => void
}

export const useStore = create<Props>()(
  devtools(
    (set) => ({
      products: [],
      add: (newProduct: ProductType) =>
        set((state) => ({ products: [...state.products, newProduct] })),
      remove: (id: number) =>
        set((state) => ({
          products: state.products.filter((product) => product.id !== id),
        })),
    }),
    { name: 'products-cart' },
  ),
)
