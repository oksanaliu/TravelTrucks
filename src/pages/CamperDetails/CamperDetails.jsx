import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Outlet } from 'react-router-dom';

import { fetchCamperDetails } from '../../features/campersSlice';
import Gallery from '../../components/CamperDetails/Gallery';
import styles from './CamperDetails.module.css';

import acIcon from '../../assets/icons/cup-hot.svg';
import automaticIcon from '../../assets/icons/ui-radios.svg';
import kitchenIcon from '../../assets/icons/hugeicons_gas-stove.svg';
import tvIcon from '../../assets/icons/tv.svg';
import bathroomIcon from '../../assets/icons/ph_shower.svg';

const CamperDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { camperDetails, status } = useSelector((state) => state.campers);

  useEffect(() => {
    if (id) {
      dispatch(fetchCamperDetails(id));
    }
  }, [dispatch, id]);

  if (status === 'loading') return <p>Loading...</p>;
  if (!camperDetails || !camperDetails.name) return <p>Camper not found</p>;

  const features = [
    { label: 'AC', icon: acIcon, available: camperDetails.ac },
    {
      label: 'Automatic',
      icon: automaticIcon,
      available: camperDetails.transmission?.toLowerCase() === 'automatic',
    },
    { label: 'Kitchen', icon: kitchenIcon, available: camperDetails.kitchen },
    { label: 'TV', icon: tvIcon, available: camperDetails.tv },
    {
      label: 'Bathroom',
      icon: bathroomIcon,
      available: camperDetails.bathroom,
    },
  ];

  return (
    <div className={styles.detailsPage}>
      <h1 className={styles.title}>{camperDetails.name}</h1>

      <Gallery images={camperDetails.gallery} />

      <div className={styles.features}>
        <h2 className={styles.subtitle}>Vehicle Features</h2>
        <ul className={styles.featuresList}>
          {features.map(
            (feature) =>
              feature.available && (
                <li key={feature.label} className={styles.featureItem}>
                  <img
                    src={feature.icon}
                    alt={feature.label}
                    className={styles.featureIcon}
                  />
                  <span className={styles.featureText}>{feature.label}</span>
                </li>
              )
          )}
        </ul>
      </div>

      <div className={styles.tabLinks}>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>

      <Outlet context={camperDetails} />
    </div>
  );
};

export default CamperDetails;
