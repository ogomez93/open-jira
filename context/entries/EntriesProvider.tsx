import { FC, PropsWithChildren, useReducer } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
  const addEntry = (description: string) => {
    const payload: Entry = {
      _id: uuidv4(),
      description,
      status: 'pending',
      createdAt: Date.now()
    }
    dispatch({ type: '[Entries] Add-Entry', payload })
  }
  const updateEntry = (payload: Entry) => dispatch({ type: '[Entries] Update-Entry', payload })

  return (
    <EntriesContext.Provider value={{ 
      ...state,
      addEntry,
      updateEntry
    }}>
      { children }
    </EntriesContext.Provider>
  )
}
