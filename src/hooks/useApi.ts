import { useContext } from "react"
import  { UserContext }  from '../context/UserContext'

export const useApi = () => {
  return useContext(UserContext)
}