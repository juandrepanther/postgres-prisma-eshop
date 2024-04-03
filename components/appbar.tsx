'use client'

import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AdbIcon from '@mui/icons-material/Adb'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AddIcon from '@mui/icons-material/Add'
import AddNewProductModal from './add-new-product'
import { useRouter } from 'next/navigation'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'
import { useState, MouseEvent } from 'react'
import { useStore } from '@/store/store'

const pages = ['Products']

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null)
  const [isOpenModal, setOpenModal] = useState(false)

  const products = useStore((state) => state.products)

  const router = useRouter()

  const handleOpenModal = () => setOpenModal(true)

  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
    router.push('/')
  }

  const openCart = () => router.push('/cart')
  const openHome = () => router.push('/')

  return (
    <>
      <AppBar position="sticky">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ShoppingBagIcon
              onClick={openHome}
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, cursor: 'pointer' }}
            />

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center', columnGap: '1rem' }}>
              <Tooltip onClick={handleOpenModal} title="Add New Product">
                <AddIcon
                  sx={{
                    cursor: 'pointer',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'rotate(75deg)',
                    },
                  }}
                />
              </Tooltip>
              <Tooltip title="Open cart">
                <Box sx={{ position: 'relative' }}>
                  <ShoppingCartIcon sx={{ cursor: 'pointer' }} onClick={openCart} />
                  {products.length > 0 && (
                    <Box
                      sx={{
                        position: 'absolute',
                        top: -5,
                        right: -10,
                        width: '15px',
                        height: '15px',
                        backgroundColor: 'red',
                        color: 'white',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.5rem', fontWeight: 400 }}>
                        {products.length}
                      </Typography>
                    </Box>
                  )}
                </Box>
              </Tooltip>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {isOpenModal && (
        <AddNewProductModal isOpenModal={isOpenModal} setIsOpenModal={setOpenModal} />
      )}
    </>
  )
}
export default ResponsiveAppBar
