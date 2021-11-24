import { useApi } from "../../hooks/useApi";
import styles from '../../styles/home.module.scss'

export const About = () => {

  const { user } = useApi()

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
                <h3>@{user.login}</h3>
                <p>{user.bio}</p>
              </div>
            </div>

          </div>
        </div>
      ))}
    </main>
  );
}