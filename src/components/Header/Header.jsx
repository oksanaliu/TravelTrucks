import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/icons/Logo.svg';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <img
            src={logo}
            alt="TravelTrucks Logo"
            className={styles.logo}
          />{' '}
        </Link>

        <nav className={styles.nav}>
          <NavLink to="/" className={styles.link}>
            Home
          </NavLink>
          <NavLink to="/catalog" className={styles.link}>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
