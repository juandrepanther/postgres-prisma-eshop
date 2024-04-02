import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  console.log(req.body)

  return new Response('Hello, Next.js!', { status: 200 })
}
