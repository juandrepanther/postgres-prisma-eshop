'use client'

import { Button } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useTransition } from 'react'

export default function RefreshButton() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  return (
    <Button
      variant="outlined"
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          router.refresh()
        })
      }}
    >
      {isPending ? 'Refreshing...' : 'Refresh'}
    </Button>
  )
}
