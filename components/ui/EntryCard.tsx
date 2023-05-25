import { DragEvent, FC, useContext } from 'react'
import { useRouter } from 'next/router'

import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material'

import { Entry } from '../../interfaces'
import { UIContext } from '../../context/ui'

interface Props {
  entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {
  const { startDragging, endDragging } = useContext(UIContext)
  const router = useRouter()

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text', entry._id)
    startDragging()
  }

  const handleClick = () => router.push(`/entries/${entry._id}`)

  return (
    <Card
      draggable
      sx={{ marginBottom: 1 }}
      onDragStart={onDragStart}
      onDragEnd={endDragging}
      onClick={handleClick}
    >
      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>{ entry.description }</Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: 2 }}>
          <Typography variant='body2'>30 minutes ago</Typography>
        </CardActions>
      </CardActionArea>
    </Card>
  )
}
