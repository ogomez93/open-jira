import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface ContextProps {
  entries: Entry[]

  // methods
  addEntry: (description: string) => void
  deleteEntry: (_id: string) => Promise<boolean>
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps)
