import { EntriesState } from './'
import { Entry } from '../../interfaces'

type EntriesActionType =
| { type: '[Entries] Refresh', payload: Entry[] }
| { type: '[Entries] Add-Entry', payload: Entry }
| { type: '[Entries] Update-Entry', payload: Entry }

export const entriesReducer = (state: EntriesState, action: EntriesActionType): EntriesState => {
  switch (action.type) {
    case '[Entries] Refresh':
      return {
        ...state,
        entries: [...action.payload]
      }
    case '[Entries] Add-Entry':
      return {
        ...state,
        entries: [...state.entries, action.payload]
      }
    case '[Entries] Update-Entry':
      return {
        ...state,
        entries: state.entries.map(entry => {
          if (entry._id === action.payload._id) {
            entry.status = action.payload.status
            entry.description = action.payload.description
          }
          return entry
        })
      }
    default:
      return state
  }
}
