import styles from './Gallery.module.css';

const Gallery = ({ images }) => {
  if (!images || images.length === 0) return <p>No images available</p>;

  return (
    <div className={styles.gallery}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.thumb || img.original}
          alt={`Camper ${idx + 1}`}
          className={styles.image}
        />
      ))}
    </div>
  );
};

export default Gallery;
