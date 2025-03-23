import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../features/campersSlice';
import { useSearchParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import CamperCard from '../../components/CamperCard/CamperCard';
import styles from './Catalog.module.css';

const Catalog = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [visibleCount, setVisibleCount] = useState(4); // показати спочатку 4

  const campers = useSelector((state) => state.campers.campers);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCampers());
    }
  }, [dispatch, status]);

  const filters = useMemo(() => {
    return {
      location: searchParams.get('location')?.toLowerCase().trim() || '',
      vehicleType: searchParams.get('vehicleType')?.toLowerCase().trim() || '',
      selectedEquipment: searchParams.get('equipment')
        ? searchParams
            .get('equipment')
            .split(',')
            .map((item) => item.toLowerCase().trim())
        : [],
    };
  }, [searchParams]);

  const filteredCampers = useMemo(() => {
    if (!Array.isArray(campers)) return [];

    return campers.filter((camper) => {
      const camperLocation = camper.location?.toLowerCase() || '';
      const camperType = camper.form?.toLowerCase() || '';

      const matchLocation = filters.location
        ? camperLocation.includes(filters.location)
        : true;
      const matchType = filters.vehicleType
        ? camperType === filters.vehicleType
        : true;
      const matchEquipment = filters.selectedEquipment.every((eq) => {
        if (eq === 'automatic') {
          return camper.transmission?.toLowerCase() === 'automatic';
        }
        return Object.keys(camper).some(
          (key) => key.toLowerCase() === eq && camper[key] === true
        );
      });

      return matchLocation && matchType && matchEquipment;
    });
  }, [campers, filters]);

  useEffect(() => {
    setVisibleCount(4);
  }, [filters]);

  const visibleCampers = filteredCampers.slice(0, visibleCount);

  return (
    <main className={styles.catalogWrapper}>
      <Filters />
      <section>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading campers: {error}</p>}
        {status === 'succeeded' && filteredCampers.length === 0 ? (
          <p>За обраними фільтрами не знайдено жодного кемпера.</p>
        ) : (
          <>
            {visibleCampers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}

            {visibleCount < filteredCampers.length && (
              <button
                className={styles.loadMoreBtn}
                onClick={() => setVisibleCount((prev) => prev + 4)}
              >
                Load more
              </button>
            )}
          </>
        )}
      </section>
    </main>
  );
};

export default Catalog;
