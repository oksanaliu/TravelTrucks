import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Catalog from '../pages/Catalog/Catalog';
import CamperDetails from '../pages/CamperDetails/CamperDetails';
import Features from '../components/CamperDetails/Features';
import Reviews from '../components/CamperDetails/Reviews';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/catalog" element={<Catalog />} />
      <Route path="/catalog/:id" element={<CamperDetails />}>
        <Route path="features" element={<Features />} />
        <Route path="reviews" element={<Reviews />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
