import React from 'react'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

function Header() {
  return (
    <AppBar position='sticky' sx={{ background: 'pink' }}>
      <Toolbar>
        <Box display='flex'>
          <Button LinkComponent={Link} to='/'>
            <Typography color='white' variant='h4'>
              Smart Gallery
            </Typography>
          </Button>
        </Box>
        <Box display='flex' marginLeft='auto'>
          <Button
            LinkComponent={Link}
            to='/cart'
            sx={{ margin: 1, borderRadius: 10 }}
            color='warning'
          >
            <ShoppingCartIcon />
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Header
