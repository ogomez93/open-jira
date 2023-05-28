import { createContext } from 'react'

interface ContextProps {
  sidemenuOpen: boolean
  isAddingEntry: boolean
  isDarkTheme: boolean
  isDragging: boolean

  // methods
  openSideMenu: () => void
  closeSideMenu: () => void
  setIsAddingEntry: (isAddingEntry: boolean) => void
  startDragging: () => void
  endDragging: () => void
  toggleIsDarkTheme: () => void
}

export const UIContext = createContext({} as ContextProps)
