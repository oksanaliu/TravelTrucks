import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1 className="home-title">Welcome to TravelTrucks</h1>
      <p className="home-subtitle">Find your perfect camper today!</p>
      <Link to="/catalog" className="home-btn">
        View Now
      </Link>
    </div>
  );
};

export default Home;
