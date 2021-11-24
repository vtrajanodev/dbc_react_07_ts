import { About } from '../../components/About/About';
import { Repos } from '../../components/Repos/Repos';
import { useApi } from '../../hooks/useApi';
import styles from '../../styles/home.module.scss'

export const Home = () => {
 
  return (
    <>
     <About />
     <Repos />
    </>
  );
}