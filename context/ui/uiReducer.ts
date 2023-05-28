import { UIState } from './';

type UIActionType =
| { type: '[UI] - Open Sidebar' }
| { type: '[UI] - Close Sidebar' }
| { type: '[UI] - Set isAddingEntry', payload: boolean }
| { type: '[UI] - Set isDragging', payload: boolean }
| { type: '[UI] - Toggle isDarkTheme' }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {
  switch (action.type) {
    case '[UI] - Open Sidebar':
      return { ...state, sidemenuOpen: true }
    case '[UI] - Close Sidebar':
      return { ...state, sidemenuOpen: false }
    case '[UI] - Set isAddingEntry':
      return { ...state, isAddingEntry: action.payload }
    case '[UI] - Set isDragging':
      return { ...state, isDragging: action.payload }
    case '[UI] - Toggle isDarkTheme':
      return { ...state, isDarkTheme: !state.isDarkTheme }
    default:
      return state
  }
}
