import * as React from 'react';
import Map from 'react-map-gl';

function ParcelLocation(longitude, latitude, zoom) {
    console.log(longitude, latitude, zoom);
  return (
    <Map
      mapboxAccessToken="<Mapbox access token>"
      initialViewState={{
        longitude: longitude,
        latitude: latitude,
        zoom: zoom || 14
      }}
      style={{width: 600, height: 400}}
      mapStyle="mapbox://styles/mapbox/streets-v9"
    />
  );
}

export default ParcelLocation;