import { useContext } from 'react'
import NextLink from 'next/link'

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { UIContext } from '../../context/ui'

export const Navbar = () => {
  const { openSideMenu } = useContext(UIContext)

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <IconButton size='large' edge='start' onClick={openSideMenu}>
          <MenuIcon />
        </IconButton>

        <NextLink href='/' passHref style={{ textDecoration: 'none', color: 'white' }}>
          <Typography variant='h6'>
            OpenJira
          </Typography>
        </NextLink>
      </Toolbar>
    </AppBar>
  )
}
