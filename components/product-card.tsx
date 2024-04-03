'use client'

import React, { useState } from 'react'
import { Box, Button, Typography } from '@mui/material'
import { ProductType } from '@/lib/types'
import Image from 'next/image'
import NewProductLabel from '@/public/isNew.png'
import { useStore } from '@/store/store'
import { toast } from 'react-toastify'

export default function ProductCard(props: ProductType) {
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
    id,
  } = props
  const [isHovered, setIsHovered] = useState(false)

  const { add } = useStore((state) => state)

  const addProductToCart = () => {
    add(props)
    toast.success('Product added to cart')
  }

  return (
    <Box
      component={'div'}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{
        position: 'relative',
        width: '285px',
        height: '446px',
        backgroundColor: '#f4f5f7',
        cursor: outOfStock ? 'auto' : 'pointer',
      }}
    >
      <Box sx={{ overflow: 'hidden', width: '285px', height: '301px' }}>
        <Image layout="responsive" width={285} height={301} src={image} alt={title} />
      </Box>

      <Box sx={{ px: '1rem' }}>
        <Typography sx={{ fontSize: '1.5rem', fontWeight: 700 }}>{title}</Typography>
        <Typography sx={{ fontWeight: 400, color: 'grey' }}>{description}</Typography>
        <Typography sx={{ fontWeight: 600, color: 'grey' }}>{price} EUR</Typography>

        {previousPrice > 0 && (
          <Typography
            sx={{
              fontWeight: 400,
              color: 'grey',
              textDecoration: 'line-through',
              fontSize: '.8rem',
            }}
          >
            {previousPrice} EUR
          </Typography>
        )}
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

      <Box
        sx={{
          position: 'absolute',
          top: 10,
          left: 10,
        }}
      >
        {previousPrice > 0 && (
          <Box
            width={50}
            height={50}
            sx={{
              backgroundColor: '#e97171',
              color: 'white',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {discount}%
          </Box>
        )}
      </Box>

      {outOfStock && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backdropFilter: outOfStock ? 'blur(2px)' : 'none',
            backgroundColor: outOfStock ? 'rgba(255, 255, 255, 0.3)' : 'none',
          }}
        >
          <Typography sx={{ color: 'orange', fontSize: '2rem', fontWeight: 800 }}>
            Out Of Stock
          </Typography>
        </Box>
      )}

      {!outOfStock && isHovered && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0 0 10px 0 grey',
          }}
        >
          <Button onClick={addProductToCart} variant="contained">
            Add to Cart
          </Button>
        </Box>
      )}
    </Box>
  )
}
