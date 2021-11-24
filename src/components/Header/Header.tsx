import logo from '../../assets/github4.png'
import styles from './header.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div>
        <img src={logo} alt="logo github" />
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