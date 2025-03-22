const Features = ({ features }) => {
  return (
    <div className="features">
      <h2>Features</h2>
      <ul>
        {Object.entries(features).map(([key, value]) => (
          <li key={key}>
            <strong>{key}:</strong> {value.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
