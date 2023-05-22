import { FC, PropsWithChildren } from 'react'
import { Card, CardHeader, Grid } from '@mui/material'
import { EntryList } from './'

interface Props {
  title: string
}

export const CardsColumn: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title={title} />
        <EntryList />
      </Card>
    </Grid>
  )
}
