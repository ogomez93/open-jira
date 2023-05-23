import { FC } from 'react'
import { Card, CardHeader, Grid } from '@mui/material'
import { EntryList } from './'
import { EntryStatus } from '../../interfaces'

interface Props {
  status: EntryStatus
  title: string
}

export const CardsColumn: FC<Props> = ({ status, title }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title={title} />
        <EntryList status={status} />
      </Card>
    </Grid>
  )
}
