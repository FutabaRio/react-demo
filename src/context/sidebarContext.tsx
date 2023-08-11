import PropTypes from 'prop-types'
import { createContext, useReducer } from 'react'

import reducer from '../reducer/sidebarReducer'

const initialState = {
  isSidebarOpen: false,
}

export const SidebarContext = createContext({
  isSidebarOpen: false,
  toggleSidebar: () => {},
})

export const SidebarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const toggleSidebar = () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    })
  }
  return (
    <SidebarContext.Provider
      value={{
        ...state,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  )
}

SidebarProvider.prototypes = {
  children: PropTypes.node,
}
