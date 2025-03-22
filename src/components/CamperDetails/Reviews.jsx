import { useOutletContext } from 'react-router-dom';

const Reviews = () => {
  const camper = useOutletContext();

  return (
    <div className="reviews">
      <h2>Reviews</h2>
      <ul>
        {camper.reviews?.map((review, idx) => (
          <li key={idx}>
            <strong>{review.reviewer_name}</strong> ({review.reviewer_rating}
            /5): {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reviews;
