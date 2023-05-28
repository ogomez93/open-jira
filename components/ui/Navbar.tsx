import { FC, useContext } from 'react'
import NextLink from 'next/link'

import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

import { UIContext } from '../../context/ui'
import { ThemeSwitch } from './ThemeSwitch'

export const Navbar: FC = () => {
  const { openSideMenu } = useContext(UIContext)

  return (
    <AppBar position='sticky'>
      <Toolbar>
        <Box display='flex' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
          <Box display='flex' alignItems='center'>
            <IconButton size='large' edge='start' onClick={openSideMenu}>
              <MenuIcon />
            </IconButton>

            <NextLink href='/' passHref style={{ textDecoration: 'none', color: 'white' }}>
              <Typography variant='h6'>
                OpenJira
              </Typography>
            </NextLink>
          </Box>

          <ThemeSwitch />
        </Box>
      </Toolbar>
    </AppBar>
  )
}
