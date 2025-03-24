import { useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Filters.module.css';
import cup_hotIcon from '../../assets/icons/cup-hot.svg';
import windIcon from '../../assets/icons/wind.svg';
import diagramIcon from '../../assets/icons/diagram.svg';
import tvIcon from '../../assets/icons/tv.svg';
import ph_showerIcon from '../../assets/icons/ph_shower.svg';
import bi_grid_1x2Icon from '../../assets/icons/bi_grid-1x2.svg';
import bi_grid_3x3_gapIcon from '../../assets/icons/bi_grid-3x3-gap.svg';
import bi_gridIcon from '../../assets/icons/bi_grid.svg';
import Map from '../../assets/icons/Map.svg';

const vehicleTypesMap = {
  Van: 'panelTruck',
  'Fully Integrated': 'fullyIntegrated',
  Alcove: 'alcove',
};

const Filters = () => {
  const navigate = useNavigate();
  const { search } = useLocation();

  const [location, setLocation] = useState('');
  const [equipment, setEquipment] = useState([]);
  const [vehicleType, setVehicleType] = useState('');

  useEffect(() => {
    const params = new URLSearchParams(search);
    setLocation(params.get('location') || '');
    setEquipment(params.get('equipment')?.split(',') || []);
    setVehicleType(params.get('vehicleType') || '');
  }, [search]);

  const handleToggleEquipment = (item) => {
    setEquipment((prev) =>
      prev.includes(item) ? prev.filter((e) => e !== item) : [...prev, item]
    );
  };

  const handleVehicleTypeClick = (label) => {
    const value = vehicleTypesMap[label];
    setVehicleType((prev) => (prev === value ? '' : value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (location) params.set('location', location);
    if (vehicleType) params.set('vehicleType', vehicleType);
    if (equipment.length > 0) params.set('equipment', equipment.join(','));

    navigate(`/catalog?${params.toString()}`);
  };

  const equipmentButtons = [
    { label: 'AC', icon: windIcon },
    { label: 'Automatic', icon: diagramIcon },
    { label: 'Kitchen', icon: cup_hotIcon },
    { label: 'TV', icon: tvIcon },
    { label: 'Bathroom', icon: ph_showerIcon },
  ];

  const vehicleButtons = [
    { label: 'Van', value: 'panelTruck', icon: bi_grid_1x2Icon },
    {
      label: 'Fully Integrated',
      value: 'fullyIntegrated',
      icon: bi_gridIcon,
    },
    { label: 'Alcove', value: 'alcove', icon: bi_grid_3x3_gapIcon },
  ];

  return (
    <form className={styles.filters} onSubmit={handleSubmit}>
      <label className={styles.label}>
        Location
        <div className={styles.inputWrapper}>
          <img src={Map} alt="Map" className={styles.inputIcon} />
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Kyiv, Ukraine"
            className={styles.input}
          />
        </div>
      </label>
      <div>
        <p className={styles.sectionText}>Filters</p>
      </div>
      <div className={styles.section}>
        <p className={styles.sectionTitle}>Vehicle equipment</p>
        <div className={styles.options}>
          {equipmentButtons.map(({ label, icon }) => (
            <button
              type="button"
              key={label}
              onClick={() => handleToggleEquipment(label)}
              className={`${styles.filterBtn} ${equipment.includes(label) ? styles.active : ''}`}
            >
              <img src={icon} alt={label} className={styles.icon} />
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <p className={styles.sectionTitle}>Vehicle type</p>
        <div className={styles.options}>
          {vehicleButtons.map(({ label, value, icon }) => (
            <button
              type="button"
              key={value}
              onClick={() => handleVehicleTypeClick(label)}
              className={`${styles.filterBtn} ${vehicleType === value ? styles.active : ''}`}
            >
              <img src={icon} alt={label} className={styles.icon} />
              {label}
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
