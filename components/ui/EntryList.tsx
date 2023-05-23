import { FC, useContext, useMemo } from 'react'
import { List, Paper } from '@mui/material'

import { EntryCard } from './'
import { EntriesContext } from '../../context/entries'
import { Entry, EntryStatus } from '../../interfaces'

interface Props {
  status: EntryStatus
}

export const EntryList: FC<Props> = ({ status }) => {
  const { entries } = useContext(EntriesContext)

  const entriesByStatus = useMemo(
    () => entries.filter((entry: Entry) => entry.status === status),
    [entries, status]
  )
  

  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', overflowY: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
        <List sx={{ opacity: 1 }}>
          { entriesByStatus.map((entry: Entry) => <EntryCard key={entry._id} entry={entry} />) }
        </List>
      </Paper>
    </div>
  )
}

