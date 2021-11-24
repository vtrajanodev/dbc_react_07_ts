import { useApi } from '../../hooks/useApi';
import styles from '../../styles/home.module.scss'

export const Repos = () => {

  const { repo } = useApi()

  return (
    <section>
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
    </section>
  );
}