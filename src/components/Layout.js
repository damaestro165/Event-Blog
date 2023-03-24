import styles from '../styles/Home.module.css';
import { Nav } from './Nav';

export const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
