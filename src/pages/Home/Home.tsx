import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/ApiContext';
import api from '../../services/api';
import styles from './home.module.scss'


type Repo = {
  name: string;
  description: string;
  url: string;
}

export const Home = () => {

  const { user } = useContext(UserContext)
  const [repo, setRepo] = useState<Repo[]>([])

  useEffect(() => {
    (async () => {
      const response = await axios.get('https://api.github.com/users/vtrajanodev/repos')
      setRepo(response.data)
    })()
  }, [])

  return (
    <main>
      {user?.map((user, index) => (
        <div key={index}>
          <div className="container">
            <div className={styles.home}>
              <div className={styles.profilePicture}>
                <img src={user.avatar_url} alt="foto perfil" />
              </div>

              <div className={styles.sobre}>
                <h1>{user.name}</h1>
                <h3>{user.login}</h3>
                <p>{user.bio}</p>
              </div>
            </div>

          </div>
        </div>
      ))}
      <h2>Repositórios:</h2>
      {repo.map((repo, index) => (
        <div className={styles.repos} key={index}>
          <div className={styles.repoCard}>
            <h4>{repo.name}</h4>
            <p>{repo.description}</p>
            <a href={repo.url}>Acesse o repositório no github</a>
          </div>
        </div>
      ))}
    </main>
  );
}