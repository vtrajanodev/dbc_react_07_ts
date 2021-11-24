
import { createContext, useState, useEffect, ReactNode } from 'react';
import api from '../services/api'

interface User {
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  bio: string;
  id: number;
}

interface UserContextType {
  user: User[];
  repo: Repo[];
}

interface UserContextProviderProps {
  children: ReactNode;
}

interface Repo {
  name: string;
  description: string;
  html_url: string;
}

export const UserContext = createContext<UserContextType>({} as UserContextType)

export function UserContextProvider({ children }: UserContextProviderProps) {

  const [user, setUser] = useState<User[]>([]);
  const [repo, setRepo] = useState<Repo[]>([]);

  useEffect(() => {
    (async () => {
      const res = await api.get('/vtrajanodev')
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

  useEffect(() => {
    (async () => {
      const response = await api.get('/vtrajanodev/repos')
      setRepo(response.data)
    })()
  }, [])

  return (
    <UserContext.Provider value={{ user, repo }}>
      {children}
    </UserContext.Provider>
  )
}