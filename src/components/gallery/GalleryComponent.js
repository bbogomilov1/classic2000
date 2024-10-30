import { useState, useEffect } from "react";
import styles from "./GalleryComponent.module.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import client from "../../contentfulClient"; // Import your Contentful client

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]); // State for photos from Contentful

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.getEntries({
          content_type: "gallery", // Use your content type ID here
        });

        // Extract image URLs from Contentful entries
        const images = response.items.map((item) => ({
          src: item.fields.image.fields.file.url, // Get URL of the image
        }));

        setPhotos(images);
      } catch (error) {
        console.error("Error fetching photos:", error);
      }
    };

    fetchPhotos();
  }, []);

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
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={styles.galleryItem}
            onClick={() => handleImageClick(idx)}
          >
            <img src={photo.src} alt={`Photo ${idx}`} />
          </div>
        ))}

        {open && (
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={photos}
            index={index}
            onIndexChange={setIndex}
          />
        )}
      </div>
    </div>
  );
};

export default GalleryComponent;
