import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Link to="/" className="logo">
          TravelTrucks
        </Link>
        <nav className="nav">
          <Link to="/catalog" className="nav-link">
            Catalog
          </Link>
          <Link to="/favorites" className="nav-link">
            Favorites
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
