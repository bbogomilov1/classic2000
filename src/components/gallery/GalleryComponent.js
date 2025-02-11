import { useState, useEffect } from "react";
import styles from "./GalleryComponent.module.css";
import { useTranslation } from "react-i18next";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import client from "../../contentfulClient";

const GalleryComponent = () => {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [photos, setPhotos] = useState([]);
  const { t } = useTranslation("gallery");

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await client.getEntries({
          content_type: "gallery",
        });

        const images = response.items.map((item) => ({
          src: item.fields.image.fields.file.url,
          alt: item.fields.image.fields.title || `Gallery image ${item.sys.id}`,
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
      <h1 className={styles.title}>{t("title")}</h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>{t("titleDesc1")}</p>
        <p className={styles.description}>{t("titleDesc2")}</p>
      </div>

      <div className={styles.galleryGrid}>
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={styles.galleryItem}
            onClick={() => handleImageClick(idx)}
          >
            <img src={photo.src} alt={photo.alt} loading="lazy" />
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
