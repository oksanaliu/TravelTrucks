import { Link } from 'react-router-dom';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import styles from './CamperCard.module.css';
import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';

const CamperCard = ({ camper }) => {
  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
      />
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.name}>{camper.name}</h2>
          <AddToFavorites camperId={camper.id} />
        </div>
        <p className={styles.location}>{camper.location}</p>
        <p className={styles.price}>Price: €{camper.price.toLocaleString()}</p>

        <div className={styles.rating}>
          {Array.from({ length: 5 }).map((_, index) => (
            <img
              key={index}
              src={index < Math.round(camper.rating) ? starFilled : starOutline}
              alt="star"
              className={styles.starIcon}
            />
          ))}
          <span>{camper.rating.toFixed(1)}</span>
        </div>

        <Link className={styles.link} to={`/catalog/${camper.id}`}>
          Show More
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
