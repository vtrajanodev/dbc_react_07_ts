
import axios from 'axios';
import { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api'

type User = {
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
  id: number;
}

type UserContextType = {
  user: User[] | undefined;
}

type UserContextProviderProps = {
  children: ReactNode;
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {

  const [user, setUser] = useState<User[]>([])

  useEffect(() => {
    (async () => {
      const res = await api.get('/users/vtrajanodev')
      setUser([...user, {
        login: res.data.login,
        name: res.data.name,
        blog: 'https://github.com/vtrajanodev?tab=repositories',
        bio: res.data.bio,
        id: res.data.id,
        avatar_url: res.data.avatar_url
      }])
    })()
  }, [])

  return (
    <UserContext.Provider value={{ user }}>
      {children}
    </UserContext.Provider>
  )
}