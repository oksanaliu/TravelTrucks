import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../features/favoritesSlice';
import FeatureIcon from '../FeatureIcons/FeatureIcons';

const AddToFavorites = ({ camperId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  const isFavorite = favorites.includes(camperId);

  return (
    <button
      className="favorite-btn"
      onClick={() => dispatch(toggleFavorite(camperId))}
    >
      <FeatureIcon type="heart" filled={isFavorite} />
    </button>
  );
};

export default AddToFavorites;
