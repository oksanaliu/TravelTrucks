import { Link } from 'react-router-dom';
import hero from '../../assets/images/hero.jpg';
import hero2x from '../../assets/images/hero@2x.jpg';
import styles from './Home.module.css';

const Home = () => {
  return (
    <section className={styles.heroSection}>
      <img
        src={hero}
        srcSet={`${hero} 1x, ${hero2x} 2x`}
        alt="Camper on the road"
        className={styles.heroImage}
      />
      <div className={styles.overlay}>
        <h1 className={styles.title}>Campers of your dreams</h1>
        <p className={styles.subtitle}>
          You can find everything you want in our catalog
        </p>
        <Link to="/catalog" className={styles.viewBtn}>
          View Now
        </Link>
      </div>
    </section>
  );
};

export default Home;
