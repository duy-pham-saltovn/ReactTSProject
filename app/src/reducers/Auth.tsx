import React from "react"
import { Login } from "../interfaces/login"
import { setAsyncStorage, removeAsyncStorage } from '../common/Utils'

export const userState = {
  isAuthenticated: false,
  username: null,
  token: null
}

export const AuthContext = React.createContext<{ loginState: Login; dispatch: React.Dispatch<any> }>({ loginState: userState, dispatch: () => null })

export function useLoginReducer(state: Login, action: any) {
  switch (action.type) {
    case 'RETRIEVE_TOKEN':
      return { ...state, isAuthenticated: true, token: action.payload.token }
    case "LOGIN":
      const token = `${action.payload.username}-${action.payload.password}`
      const jsonValue = JSON.stringify({ isAuthenticated: true, username: action.payload.username, token })
      setAsyncStorage('LOGIN_INFO', jsonValue)
      return { ...state, isAuthenticated: true, username: action.payload.username, token: token }
    case "LOGOUT":
      removeAsyncStorage('LOGIN_INFO')
      return { ...state, isAuthenticated: false, username: null, token: null }
    default:
      return state
  }
}
