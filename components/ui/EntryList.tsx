import { FC, PropsWithChildren } from 'react'
import { List, Paper } from '@mui/material'
import { EntryCard } from './'

interface Props {
  prop1?: string
}

export const EntryList: FC<PropsWithChildren<Props>> = ({ children, prop1 }) => {
  return (
    <div>
      <Paper sx={{ height: 'calc(100vh - 180px)', overflowY: 'auto', backgroundColor: 'transparent', padding: '1px 5px' }}>
        <List sx={{ opacity: 1 }}>
          <EntryCard />
          <EntryCard />
          <EntryCard />
        </List>
      </Paper>
    </div>
  )
}

