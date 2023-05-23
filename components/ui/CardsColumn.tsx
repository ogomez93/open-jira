import { FC } from 'react'
import { Card, CardHeader, Grid } from '@mui/material'

import { EntryList, NewEntry } from './'
import { EntryStatus } from '../../interfaces'

interface Props {
  canAddEntries?: boolean
  status: EntryStatus
  title: string
}

export const CardsColumn: FC<Props> = ({ canAddEntries = false, status, title }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title={title} />
        { canAddEntries && <NewEntry /> }
        <EntryList status={status} />
      </Card>
    </Grid>
  )
}
