import { Card, CardContent, CardHeader, Grid } from '@mui/material'
import { FC, PropsWithChildren } from 'react'

interface Props {
  title: string
}

export const CardsColumn: FC<PropsWithChildren<Props>> = ({ title, children }) => {
  return (
    <Grid item xs={12} sm={4}>
      <Card sx={{ height: 'calc(100vh - 100px)' }}>
        <CardHeader title={title} />
        <CardContent>

        </CardContent>
      </Card>
    </Grid>
  )
}
