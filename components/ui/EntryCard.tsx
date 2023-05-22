import { FC, PropsWithChildren } from 'react'
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

interface Props {
  prop1?: string
}

export const EntryCard: FC<PropsWithChildren<Props>> = ({ children, prop1 }) => {
  return (
    <Card sx={{ marginBottom: 1 }}>
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>This is the description</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
