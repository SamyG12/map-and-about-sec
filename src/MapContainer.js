
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from "react";
​
export default MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 41.3851, lng: 2.1734
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAcBUfQ8Kf9KdgbQDfmQmAVlw - CRlvKffo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={13}
          center={defaultCenter}
        />
     </LoadScript>
  )
};