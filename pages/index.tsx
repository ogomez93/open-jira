import type { NextPage } from 'next'

import { Grid } from '@mui/material'
import { Layout } from '../components/layouts'
import { CardsColumn } from '../components/ui'

const Home: NextPage = () => {
  return (
    <Layout title='Home - OpenJira'>
      <Grid container spacing={2}>
        <CardsColumn status='pending' title='Pending' />
        <CardsColumn status='in-progress' title='In Progress' />
        <CardsColumn status='finished' title='Completed' />
      </Grid>
    </Layout>
  )
}

export default Home
