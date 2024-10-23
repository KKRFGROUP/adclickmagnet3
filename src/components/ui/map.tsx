import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';


const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: 28.6139, // Latitude of Delhi
  lng: 77.2090, // Longitude of Delhi
};

const options = {
  disableDefaultUI: true, // Hide default UI controls
  zoomControl: true, // Enable zoom control
};

const GoogleMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Store API key in .env.local
  });

  if (loadError) return <div>Error loading map</div>;
  if (!isLoaded) return <div>Loading map...</div>;

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      zoom={12} // Adjust zoom level
      center={center}
      options={options}
    >
      {/* Optionally, add a marker at Delhi */}
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMapComponent;
