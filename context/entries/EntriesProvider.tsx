import { FC, PropsWithChildren, useEffect, useReducer } from 'react'

import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'
import { entriesApi } from '../../api'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entries] Refresh', payload: data })
  }
  useEffect(() => {
    refreshEntries()
  }, [])

  const addEntry = async (description: string) => {
    const { data } = await entriesApi.post<Entry>('/entries', { description })
    
    dispatch({ type: '[Entries] Add-Entry', payload: data })
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
