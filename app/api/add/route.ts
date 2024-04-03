import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { ProductType } from '@/lib/types'
import { NextResponse } from 'next/server'
import { ProductCategory } from '@prisma/client'

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  // const body = await req.json()

  const {
    category,
    image,
    title,
    description,
    price,
    isNew,
    previousPrice,
    outOfStock,
    discount,
  }: ProductType = await req.json()

  const newProduct = {
    category: category as ProductCategory,
    image,
    title,
    description,
    price: Number(price),
    isNew,
    previousPrice: Number(previousPrice),
    outOfStock,
    discount,
  } as ProductType

  try {
    await prisma.product.create({ data: newProduct })

    console.log('Product saved successfully')

    return NextResponse.json({ success: newProduct })
  } catch (error) {
    console.error('Error saving data:', error)
    return NextResponse.json({ success: false })
  }
}
