import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, Link, Outlet } from 'react-router-dom';
import { fetchCamperDetails } from '../../features/campersSlice';
import Gallery from '../../components/CamperDetails/Gallery';
import styles from './CamperDetails.module.css';

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
      <h1>{camperDetails.name}</h1>
      <Gallery images={camperDetails.gallery} />
      <div className={styles.tabLinks}>
        <Link to="features">Features</Link>
        <Link to="reviews">Reviews</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default CamperDetails;
