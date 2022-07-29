import styles from '../styles/navbar.module.scss';
import lang from '../language';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>{lang.en.nav.about}</li>
        <li>{lang.en.nav.past}</li>
        <li>{lang.en.nav.goal}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
