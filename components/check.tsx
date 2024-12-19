import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import { Modal, Paper } from '@mui/material'
import { toast } from 'react-toastify'
import { ProductType } from '@/lib/types'
import { calculateDiscountPercentage } from '@/lib/utils'

const style = {
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 'fit-content',
  p: '20px',
}

interface Props {
  formData: ProductType
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  isOpenCheckModal: boolean
  setOpenCheckModal: React.Dispatch<React.SetStateAction<boolean>>
  setIsOpenModal: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Check({
  setIsOpenModal,
  isOpenCheckModal,

  setOpenCheckModal,
  setLoading,
  formData,
}: Props) {
  const check = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)

    const res = await fetch('/api/check', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: data.get('username'),
        password: data.get('password'),
      }),
    })

    if (res.status === 200) {
      toast.success('Authenticated')

      // creating new product after authentication is successful

      const newProduct = {
        category: formData.category,
        image: formData.image,
        title: formData.title,
        description: formData.description,
        price: formData.price,
        isNew: formData.isNew,
        discount: calculateDiscountPercentage(formData.price, formData.previousPrice),
        previousPrice: formData.previousPrice,
        outOfStock: formData.outOfStock,
      }
      const res = await fetch('/api/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct),
      })
      if (res.status === 201) {
        console.log('Product created successfully')
      }
      toast.success('Product created successfully')
      setLoading(false)
      setIsOpenModal(false)
    } else {
      toast.error('Wrong username or password')
    }
  }

  return (
    <Modal
      sx={{ ...style, '& .MuiBackdrop-root': { backgroundColor: 'transparent' } }}
      open={isOpenCheckModal}
      onClose={() => setIsOpenModal(false)}
    >
      <Paper
        elevation={24}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '20px',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'orange' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Authenticate to perform adding the new product
        </Typography>
        <Box component="form" onSubmit={check} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Check
          </Button>
        </Box>
      </Paper>
    </Modal>
  )
}
