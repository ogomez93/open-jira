import { FC, PropsWithChildren, useEffect, useReducer } from 'react'
import { useSnackbar } from 'notistack'

import { EntriesContext, entriesReducer } from './'
import { Entry } from '../../interfaces'
import { entriesApi } from '../../api_client'

export interface EntriesState {
  entries: Entry[]
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: []
}

export const EntriesProvider:FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)
  const { enqueueSnackbar } = useSnackbar()

  const refreshEntries = async () => {
    const { data } = await entriesApi.get<Entry[]>('/entries')
    dispatch({ type: '[Entries] Refresh', payload: data })
  }
  useEffect(() => {
    refreshEntries()
  }, [])

  const addEntry = async (description: string) => {
    try {
      const { data } = await entriesApi.post<Entry>('/entries', { description })
      dispatch({ type: '[Entries] Add-Entry', payload: data })
    } catch (error) {
      console.log(error)
    }
  }
  const updateEntry = async ({ _id, description, status }: Entry, showSnackbar = false) => {
    try {
      const { data } = await entriesApi.put<Entry>(`/entries/${_id}`, { description, status })
      dispatch({ type: '[Entries] Update-Entry', payload: data })
      if (!showSnackbar) return

      enqueueSnackbar('Entry updated!', {
        variant: 'success',
        autoHideDuration: 1000,
        anchorOrigin: {
          vertical: 'top',
          horizontal: 'right'
        }
      })
    } catch (error) {
      console.log(error)
    }
  }

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
