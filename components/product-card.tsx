import React from 'react'
import { Box, Typography } from '@mui/material'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import NewProductLabel from '@/public/isNew.png'

export default function ProductCard({
  image,
  title,
  category,
  price,
  description,
  isNew,
  discount,
  outOfStock,
  previousPrice,
}: ProductType) {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '285px',
        height: '446px',
        backgroundColor: '#f4f5f7',
      }}
    >
      <Box sx={{ overflow: 'hidden', width: '285px', height: '301px' }}>
        <Image layout="responsive" width={285} height={301} src={image} alt={title} />
      </Box>

      <Box sx={{ px: '1rem' }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>{title}</Typography>
        <Typography sx={{ fontWeight: 400, color: 'grey' }}>{description}</Typography>
        <Typography sx={{ fontWeight: 600, color: 'grey' }}>{price} EUR</Typography>
        <Typography
          sx={{ fontWeight: 400, color: 'grey', textDecoration: 'line-through', fontSize: '.8rem' }}
        >
          {previousPrice} EUR
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'absolute',
          top: 10,
          right: 10,
        }}
      >
        {isNew && <Image width={50} height={50} src={NewProductLabel} alt={title} />}
      </Box>
    </Box>
  )
}
