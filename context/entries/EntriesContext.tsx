import { createContext } from 'react'
import { Entry } from '../../interfaces'

interface ContextProps {
  entries: Entry[]

  // methods
  addEntry: (description: string) => void
  updateEntry: (entry: Entry, showSnackbar?: boolean) => void
}

export const EntriesContext = createContext({} as ContextProps)
