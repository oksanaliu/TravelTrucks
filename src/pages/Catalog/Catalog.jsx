import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCampers } from '../../features/campersSlice';
import { useSearchParams } from 'react-router-dom';
import Filters from '../../components/Filters/Filters';
import CamperCard from '../../components/CamperCard/CamperCard';

const Catalog = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  const campers = useSelector((state) => state.campers.campers);
  const status = useSelector((state) => state.campers.status);
  const error = useSelector((state) => state.campers.error);

  // консоль
  console.log('Status:', status);
  console.log('All campers:', campers);

  useEffect(() => {
    if (status === 'idle') {
      console.log('Dispatching fetchCampers...');
      dispatch(fetchCampers());
    }
  }, [dispatch, status]);

  const filters = useMemo(() => {
    const result = {
      location: searchParams.get('location')?.toLowerCase().trim() || '',
      vehicleType: searchParams.get('vehicleType')?.toLowerCase().trim() || '',
      selectedEquipment: searchParams.get('equipment')
        ? searchParams
            .get('equipment')
            .split(',')
            .map((item) => item.toLowerCase().trim())
        : [],
    };

    // консоль
    console.log('SearchParams filters:', result);
    return result;
  }, [searchParams]);

  const filteredCampers = useMemo(() => {
    if (!Array.isArray(campers)) {
      console.warn('Campers is not an array:', campers);
      return [];
    }

    const result = campers.filter((camper) => {
      const camperLocation = camper.location?.toLowerCase() || '';
      const camperType = camper.form?.toLowerCase() || '';

      const matchLocation = filters.location
        ? camperLocation.includes(filters.location)
        : true;

      const matchType = filters.vehicleType
        ? camperType === filters.vehicleType
        : true;

      const matchEquipment = filters.selectedEquipment.every((eq) =>
        Object.keys(camper).some(
          (key) => key.toLowerCase() === eq && camper[key] === true
        )
      );

      return matchLocation && matchType && matchEquipment;
    });

    // консоль
    console.log('Filtered campers:', result);
    return result;
  }, [campers, filters]);

  return (
    <main style={{ display: 'flex', gap: '20px' }}>
      <Filters />
      <section>
        {status === 'loading' && <p>Loading...</p>}
        {status === 'failed' && <p>Error loading campers: {error}</p>}
        {status === 'succeeded' && filteredCampers.length === 0 ? (
          <p>За обраними фільтрами не знайдено жодного кемпера.</p>
        ) : (
          filteredCampers.map((camper) => (
            <CamperCard key={camper.id} camper={camper} />
          ))
        )}
      </section>
    </main>
  );
};

export default Catalog;
