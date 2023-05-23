import { DragEvent, FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { EntryCard } from './'
import { EntriesContext } from '../../context/entries'
import { UIContext } from '../../context/ui'
import { Entry, EntryStatus } from '../../interfaces'

import styles from './EntryList.module.css'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries, updateEntry } = useContext(EntriesContext)
  const { isDragging, endDragging } = useContext(UIContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry: Entry) => entry.status === status),
    [entries, status]
  )
  
  const onEntryDrop = (e: DragEvent<HTMLDivElement>) => {
    const id = e.dataTransfer.getData('text')
    const entry = entries.find(entry => entry._id === id)!
    updateEntry({ ...entry, status })
    endDragging()
  }

  const allowDrop = (e: DragEvent<HTMLDivElement>) => e.preventDefault()

  return (
    <div
      className={isDragging ? styles.dragging : ''}
      onDrop={onEntryDrop}
      onDragOver={allowDrop}
    >
      <Paper
        sx={{
          backgroundColor: 'transparent',
          height: `calc(100vh - ${status === 'pending' ? 232 : 180}px)`,
          overflowY: 'auto',
          padding: '1px 5px'
        }}
      >
        <List sx={{ opacity: isDragging ? 0.2 : 1, transition: 'all 0.3s' }}>
          { entriesByStatus.map((entry: Entry) => <EntryCard key={entry._id} entry={entry} />) }
        </List>
      </Paper>
    </div>
  )
}

