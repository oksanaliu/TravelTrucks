import { useOutletContext } from 'react-router-dom';
import BookingForm from '../../components/BookingForm/BookingForm';
import styles from './Features.module.css';

import acIcon from '../../assets/icons/cup-hot.svg';
import automaticIcon from '../../assets/icons/ui-radios.svg';
import kitchenIcon from '../../assets/icons/hugeicons_gas-stove.svg';
import tvIcon from '../../assets/icons/tv.svg';
import bathroomIcon from '../../assets/icons/ph_shower.svg';
import fuelIcon from '../../assets/icons/fuel-pump.svg';
import radioIcon from '../../assets/icons/diagram.svg';
import fridgeIcon from '../../assets/icons/solar_fridge-outline.svg';
import microwaveIcon from '../../assets/icons/lucide_microwave.svg';
import gasIcon from '../../assets/icons/wind.svg';
import waterIcon from '../../assets/icons/ion_water-outline.svg';

const allFeatures = [
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
  { label: 'Petrol', icon: fuelIcon, key: 'engine', value: 'petrol' },
  { label: 'Radio', icon: radioIcon, key: 'radio' },
  { label: 'Refrigerator', icon: fridgeIcon, key: 'refrigerator' },
  { label: 'Microwave', icon: microwaveIcon, key: 'microwave' },
  { label: 'Gas', icon: gasIcon, key: 'gas' },
  { label: 'Water', icon: waterIcon, key: 'water' },
];

const Features = () => {
  const camper = useOutletContext();

  const activeFeatures = allFeatures.filter(({ key, value }) => {
    if (value) return camper[key]?.toLowerCase() === value;
    return camper[key] === true;
  });

  return (
    <div className={styles.detailsLayout}>
      <div className={styles.leftColumn}>
        <div className={styles.wrapper}>
          <ul className={styles.featuresList}>
            {activeFeatures.map((feature) => (
              <li key={feature.label} className={styles.featureItem}>
                <img src={feature.icon} alt={feature.label} />
                <span>{feature.label}</span>
              </li>
            ))}
          </ul>
          <p className={styles.text}>Vehicle details</p>
          <hr className={styles.divider} />
          <table className={styles.table}>
            <tbody>
              <tr>
                <td>Form</td>
                <td>{camper.form}</td>
              </tr>
              <tr>
                <td>Length</td>
                <td>{camper.length}</td>
              </tr>
              <tr>
                <td>Width</td>
                <td>{camper.width}</td>
              </tr>
              <tr>
                <td>Height</td>
                <td>{camper.height}</td>
              </tr>
              <tr>
                <td>Tank</td>
                <td>{camper.tank}</td>
              </tr>
              <tr>
                <td>Consumption</td>
                <td>{camper.consumption}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <BookingForm />
      </div>
    </div>
  );
};

export default Features;
