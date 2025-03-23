import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, NavLink, Outlet } from 'react-router-dom';

import { fetchCamperDetails } from '../../features/campersSlice';
import Gallery from '../../components/CamperDetails/Gallery';
import BookingForm from '../../components/BookingForm/BookingForm';
import styles from './CamperDetails.module.css';

import starIcon from '../../assets/icons/star-filled.svg';
import mapIcon from '../../assets/icons/Map.svg';

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

  return (
    <div className={styles.detailsPage}>
      <h1 className={styles.title}>{camperDetails.name}</h1>

      <div className={styles.metaInfo}>
        <div className={styles.rating}>
          <img src={starIcon} alt="Rating" />
          <span>{camperDetails.rating.toFixed(1)}&nbsp;</span>
          <span className={styles.reviews}>
            ({camperDetails.reviews.length} Reviews)
          </span>
        </div>
        <div className={styles.location}>
          <img src={mapIcon} alt="Location" />
          <span>{camperDetails.location}</span>
        </div>
      </div>

      <p className={styles.price}>€{camperDetails.price.toLocaleString()}</p>

      <Gallery images={camperDetails.gallery} />

      <p className={styles.description}>{camperDetails.description}</p>

      <div className={styles.tabLinks}>
        <NavLink
          to="features"
          className={({ isActive }) =>
            isActive ? `${styles.tabLink} ${styles.active}` : styles.tabLink
          }
        >
          Features
        </NavLink>
        <NavLink
          to="reviews"
          className={({ isActive }) =>
            isActive ? `${styles.tabLink} ${styles.active}` : styles.tabLink
          }
        >
          Reviews
        </NavLink>
      </div>

      {/* Головна розмітка в дві колонки */}
      <div className={styles.detailsLayout}>
        <div className={styles.leftSide}>
          <Outlet context={camperDetails} />
        </div>
        <div className={styles.rightSide}>
          <BookingForm />
        </div>
      </div>
    </div>
  );
};

export default CamperDetails;
