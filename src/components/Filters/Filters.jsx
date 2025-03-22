import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Filters.module.css';

const Filters = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(search);
    setLocation(params.get('location') || '');
    setVehicleType(params.get('vehicleType') || '');
    setEquipment(params.get('equipment')?.split(',') || []);
  }, [search]);

  const handleToggleEquipment = (item) => {
    setEquipment((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (location) params.set('location', location);
    if (vehicleType) params.set('vehicleType', vehicleType);
    if (equipment.length > 0) params.set('equipment', equipment.join(','));

    navigate(`/catalog?${params.toString()}`);
  };

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Location
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Kyiv, Ukraine"
          className={styles.input}
        />
      </label>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>Vehicle equipment</p>
        <div className={styles.options}>
          {['AC', 'Automatic', 'Kitchen', 'TV', 'Bathroom'].map((item) => (
            <button
              type="button"
              key={item}
              onClick={() => handleToggleEquipment(item)}
              className={`${styles.filterBtn} ${
                equipment.includes(item) ? styles.active : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>Vehicle type</p>
        <div className={styles.options}>
          {['Van', 'Fully Integrated', 'Alcove'].map((type) => (
            <button
              type="button"
              key={type}
              onClick={() => setVehicleType(type)}
              className={`${styles.filterBtn} ${
                vehicleType === type ? styles.active : ''
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
};

export default Filters;
