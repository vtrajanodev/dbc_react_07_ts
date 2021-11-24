import { Link } from 'react-router-dom';
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        logo
      </div>

      <nav>
        <ul>
          <li>
            <a href="#">Perfil</a>
          </li>
          <li>
            <a href="#">Repositórios</a>
          </li>
          <li>
            <a href="#">Biografia</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}