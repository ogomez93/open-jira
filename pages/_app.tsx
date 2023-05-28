import { useContext } from 'react'

import { NextComponentType, NextPageContext } from 'next'
import type { AppProps } from 'next/app'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { SnackbarProvider } from 'notistack'

import { UIContext, UIProvider } from '../context/ui'
import { EntriesProvider } from '../context/entries'

import '../styles/globals.css'
import { darkTheme, lightTheme } from '../themes'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemedApp Component={Component} pageProps={pageProps} />
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  )
}

function ThemedApp({ Component, pageProps }: { Component: NextComponentType<NextPageContext, any, any>, pageProps: any }) {
  const { isDarkTheme } = useContext(UIContext)
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
