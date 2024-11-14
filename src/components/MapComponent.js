import React, { useState } from "react";
import styles from "./MapComponent.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import { Helmet } from "react-helmet";

const MapComponent = () => {
  const position = { lat: 43.972651, lng: 22.868933 };
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.mapContainer}>
      <Helmet>
        <title>Охраняем ТИР паркинг Видин | Класик 2000 - Google Map</title>
        <meta
          name="description"
          content="Охраняем ТИР паркинг в град Видин с 24-часова охрана, видео наблюдение и удобна локация близо до Дунав Мост 2."
        />
        <meta
          name="keywords"
          content="ТИР паркинг Видин, паркинг карта Видин, охраняем паркинг Видин, Google Maps паркинг"
        />
      </Helmet>

      <LoadScript googleMapsApiKey="AIzaSyC_v2yc2Zmt2fThlyYMZP1xdIZJVTIOsaA">
        <GoogleMap
          center={position}
          zoom={15}
          style={{ height: "300px", width: "100%" }}
          mapContainerStyle={{ height: "300px", width: "100%" }}
        >
          <Marker
            position={position}
            onClick={() => setSelected(position)}
            aria-label="ТИР паркинг във Видин"
          />
          {selected && (
            <InfoWindow
              position={selected}
              onCloseClick={() => setSelected(null)}
              aria-live="polite"
            >
              <div>
                <h3>ТИР паркинг в град Видин</h3>
                <p>
                  Охраняем ТИР паркинг, разположен на влизане в град Видин, с 24
                  часова охрана и видео наблюдение. На удобна локация, близо до
                  Дунав Мост 2.
                </p>
              </div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
