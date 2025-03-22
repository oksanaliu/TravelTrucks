import { useOutletContext } from 'react-router-dom';

const Features = () => {
  const camper = useOutletContext();

  return (
    <div className="features">
      <h2>Features</h2>
      <ul>
        <li>Transmission: {camper.transmission}</li>
        <li>Engine: {camper.engine}</li>
        <li>AC: {camper.AC ? 'Yes' : 'No'}</li>
        <li>Bathroom: {camper.bathroom ? 'Yes' : 'No'}</li>
        <li>Kitchen: {camper.kitchen ? 'Yes' : 'No'}</li>
        <li>TV: {camper.TV ? 'Yes' : 'No'}</li>
        <li>Radio: {camper.radio ? 'Yes' : 'No'}</li>
        <li>Refrigerator: {camper.refrigerator ? 'Yes' : 'No'}</li>
        <li>Microwave: {camper.microwave ? 'Yes' : 'No'}</li>
        <li>Gas: {camper.gas ? 'Yes' : 'No'}</li>
        <li>Water: {camper.water ? 'Yes' : 'No'}</li>
      </ul>
    </div>
  );
};

export default Features;
