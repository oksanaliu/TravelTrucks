import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../features/campersSlice';
import styles from './AddToFavorites.module.css';
import heartFilled from '../../assets/icons/heart-filled.svg';
import heartOutline from '../../assets/icons/heart-outline.svg';

const AddToFavorites = ({ camperId }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.campers.favorites);
  const isFavorite = favorites.includes(camperId);

  const handleClick = () => {
    dispatch(toggleFavorite(camperId));
  };

  return (
    <button className={styles.favoriteBtn} onClick={handleClick}>
      <img
        src={isFavorite ? heartFilled : heartOutline}
        alt="favorite"
        className={styles.icon}
      />
    </button>
  );
};

export default AddToFavorites;
