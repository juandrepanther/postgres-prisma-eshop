import type { NextApiResponse } from 'next'
import prisma from '@/lib/prisma'
import { IUserDummy } from '@/lib/types'
import { NextResponse } from 'next/server'

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { username, password }: IUserDummy = await req.json()

  try {
    const user = await prisma.user.findUnique({
      where: {
        id: 1,
      },
    })

    if (user?.username === username && user?.password === password) {
      console.log('User Authenticated')
      return NextResponse.json({ authorized: true }, { status: 200 })
    }

    console.log('User not Authenticated')

    return NextResponse.json({ authorized: false }, { status: 401 })
  } catch (error) {
    console.error('User not Authenticated', error)

    return NextResponse.json({ authorized: false }, { status: 401 })
  }
}
