import { Link } from 'react-router-dom';
import AddToFavorites from '../AddToFavorites/AddToFavorites';
import styles from './CamperCard.module.css';

import starFilled from '../../assets/icons/star-filled.svg';
import mapIcon from '../../assets/icons/Map.svg';
import kitchenIcon from '../../assets/icons/cup-hot.svg';
import acIcon from '../../assets/icons/wind.svg';
import automaticIcon from '../../assets/icons/diagram.svg';
import tvIcon from '../../assets/icons/tv.svg';
import bathroomIcon from '../../assets/icons/ph_shower.svg';
import fuelIcon from '../../assets/icons/fuel-pump.svg';

const CamperCard = ({ camper }) => {
  const features = [
    { label: 'AC', icon: acIcon, key: 'ac' },
    {
      label: 'Automatic',
      icon: automaticIcon,
      key: 'transmission',
      value: 'automatic',
    },
    { label: 'Kitchen', icon: kitchenIcon, key: 'kitchen' },
    { label: 'TV', icon: tvIcon, key: 'TV' },
    { label: 'Bathroom', icon: bathroomIcon, key: 'bathroom' },
    { label: 'Petrol', icon: fuelIcon, key: 'engine' },
  ];

  const availableFeatures = features.filter(({ key, value }) => {
    if (value) return camper[key]?.toLowerCase() === value;
    return camper[key] === true;
  });

  return (
    <div className={styles.card}>
      <img
        className={styles.image}
        src={camper.gallery[0]?.thumb}
        alt={camper.name}
      />

      <div className={styles.content}>
        <div className={styles.top}>
          <h2 className={styles.name}>{camper.name}</h2>
          <div className={styles.priceBlock}>
            <span className={styles.price}>
              €{camper.price.toLocaleString()}
            </span>
            <AddToFavorites camperId={camper.id} />
          </div>
        </div>

        <div className={styles.ratingLocation}>
          <div className={styles.rating}>
            <img src={starFilled} alt="star" />
            <span>
              {camper.rating.toFixed(1)} ({camper.reviews.length} Reviews)
            </span>
          </div>
          <div className={styles.location}>
            <img src={mapIcon} alt="location" width="16px" height="16px" />
            <span>{camper.location}</span>
          </div>
        </div>

        <p className={styles.description}>{camper.description}</p>

        <ul className={styles.featuresList}>
          {availableFeatures.map((feature) => (
            <li key={feature.label} className={styles.featureItem}>
              <img src={feature.icon} alt={feature.label} />
              <span>{feature.label}</span>
            </li>
          ))}
        </ul>

        <Link to={`/catalog/${camper.id}`} className={styles.link}>
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
