import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDarkTheme: boolean
  isDragging: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false,
  isDarkTheme: true,
  isDragging: false
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => dispatch({ type: '[UI] - Open Sidebar' })
  const closeSideMenu = () => dispatch({ type: '[UI] - Close Sidebar' })

  const setIsAddingEntry = (payload: boolean) => dispatch({ type: '[UI] - Set isAddingEntry', payload })
  const startDragging = () => dispatch({ type: '[UI] - Set isDragging', payload: true })
  const endDragging = () => dispatch({ type: '[UI] - Set isDragging', payload: false })
  const toggleIsDarkTheme = () => dispatch({ type: '[UI] - Toggle isDarkTheme' })

  return (
    <UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu,
      setIsAddingEntry,
      startDragging,
      endDragging,
      toggleIsDarkTheme
    }}>
      { children }
    </UIContext.Provider>
  )
}
