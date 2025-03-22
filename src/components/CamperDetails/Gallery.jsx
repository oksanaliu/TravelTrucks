const Gallery = ({ images }) => {
  if (!images || images.length === 0) return <p>No images available</p>;

  return (
    <div className="gallery">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.thumb || img.original}
          alt={`Camper ${idx + 1}`}
        />
      ))}
    </div>
  );
};

export default Gallery;
