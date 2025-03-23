import { useOutletContext } from 'react-router-dom';
import styles from './Reviews.module.css';
import starFilled from '../../assets/icons/star-filled.svg';
import starOutline from '../../assets/icons/star-outline.svg';

const Reviews = () => {
  const camper = useOutletContext();

  return (
    <div className={styles.reviewsList}>
      {camper.reviews?.map((review, idx) => (
        <div key={idx} className={styles.reviewItem}>
          <div className={styles.reviewerInfo}>
            <div className={styles.avatar}>
              {review.reviewer_name?.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className={styles.reviewerName}>{review.reviewer_name}</p>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <img
                    key={i}
                    src={i < review.reviewer_rating ? starFilled : starOutline}
                    alt="star"
                  />
                ))}
              </div>
            </div>
          </div>
          <p className={styles.comment}>{review.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default Reviews;
