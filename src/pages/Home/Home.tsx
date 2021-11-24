import { useApi } from '../../hooks/useApi';
import styles from './home.module.scss'

export const Home = () => {

  const { user, repo } = useApi()
  
  return (
    <main>
      {user?.map((user, index) => (
        <div key={index}>
          <div className="container">
            <div>
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
      <div className={styles.repos}>
        {repo.map((repo, index) => (
          <div key={index}>
            <div className={styles.repoCard}>
              <h4>{repo.name}</h4>
              <p>{repo.description}</p>
              <a href={repo.html_url}>Acesse o repositório no github</a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}