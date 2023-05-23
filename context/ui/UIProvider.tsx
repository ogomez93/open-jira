import { FC, PropsWithChildren, useReducer } from 'react'
import { UIContext, uiReducer } from './';

export interface UIState {
  sidemenuOpen: boolean
  isAddingEntry: boolean
}

const UI_INITIAL_STATE: UIState = {
  sidemenuOpen: false,
  isAddingEntry: false
}

export const UIProvider:FC<PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)

  const openSideMenu = () => dispatch({ type: '[UI] - Open Sidebar' })
  const closeSideMenu = () => dispatch({ type: '[UI] - Close Sidebar' })

  const setIsAddingEntry = (payload: boolean) => dispatch({ type: '[UI] - Set isAddingEntry', payload })

  return (
    <UIContext.Provider value={{
      ...state,
      closeSideMenu,
      openSideMenu,
      setIsAddingEntry
    }}>
      { children }
    </UIContext.Provider>
  )
}
