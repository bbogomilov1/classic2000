import { useState } from "react";
import styles from "./GalleryComponent.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { photos } from "./photos.js";

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const handleImageClick = (i) => {
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Галерия</h1>
      <p className={styles.description}>
        Централен офис на Класик2000 в град Видин, България. <br /> Сервизни
        помещения, ТИР паркинг и складове в един комплекс.
      </p>

      <div className={styles.galleryGrid}>
        {photos.map((photo, index) => (
          <div
            key={index}
            className={styles.galleryItem}
            onClick={() => handleImageClick(index)}
          >
            <img src={photo.src} alt={`Photo ${index}`} />
          </div>
        ))}

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={photos.map((photo) => ({ src: photo.src }))}
            index={index}
            onIndexChange={setIndex}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryComponent;
