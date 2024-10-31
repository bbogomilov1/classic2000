import React, { useState } from "react";
import styles from "./MapComponent.module.css";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";

const MapComponent = () => {
  const position = { lat: 43.972651, lng: 22.868933 };
  const [selected, setSelected] = useState(null);

  return (
    <div className={styles.mapContainer}>
      <LoadScript googleMapsApiKey="AIzaSyC_v2yc2Zmt2fThlyYMZP1xdIZJVTIOsaA">
        <GoogleMap
          center={position}
          zoom={15}
          style={{ height: "300px", width: "100%" }}
          mapContainerStyle={{ height: "300px", width: "100%" }}
        >
          <Marker position={position} onClick={() => setSelected(position)} />
          {selected && (
            <InfoWindow
              position={selected}
              onCloseClick={() => setSelected(null)}
            >
              <div>A marker at coordinates [43.972651, 22.868933]</div>
            </InfoWindow>
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapComponent;
