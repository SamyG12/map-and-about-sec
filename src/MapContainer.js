import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';


const MapContainer = () => {
  
  const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 25.3548, lng: 51.1839
  }

  const locations = [
    {
      name: "Al Bayt Stadium",
      img: "https://static.dezeen.com/uploads/2021/12/al-bayt-stadium-world-cup-qatar-giant-tent_dezeen_2364_col_0.jpg",
      location: { 
        lat: 25.6522,
        lng: 51.4878
      },
    },
    {
      name: "Ahmad Bin Ali Stadium",
      img: "https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt2317b739ee791cee/60db063e5775160f9f1fda1f/c7f1942167e2d1b4b543307d4fb5c9686c7c9b65.jpeg?width=1200&height=673",
      location: { 
        lat: 25.3302,
        lng: 51.3401
      },
    },
    {
      name: "Al Janoub Stadium",
      img: "https://eu-images.contentstack.com/v3/assets/bltcc7a7ffd2fbf71f5/blt64cdbb5903346915/60dc52c95775160f9f24d15f/6267aa539d22f2db295bd559f43edbd25232ab0a.jpg?auto=webp&fit=crop&format=jpg&height=300&quality=60",
      location: { 
        lat: 25.1803,
        lng: 51.5965
      },
    },
    {
      name: "Khalifa International Stadium",
      img: "https://images.adsttc.com/media/images/5b59/fadb/f197/cc61/3100/0287/slideshow/khalifa_stadium10.jpg?1532623572",
      location: { 
        lat: 25.2635,
        lng: 51.4481
      },
    },
    {
      name: "Qatar Foundation Stadium",
      img: "https://images.ctfassets.net/2h1qowfuxkq7/7J0KqMWciG62hXUYHaSxgv/982aa5318d8e44dcbb5f70ab2cb3e5fd/Education_City_Stadium_-_Hero.jpg?w=1680&h=700&fl=progressive&q=85&fm=jpg",
      location: { 
        lat: 25.3108,
        lng: 51.4244
      },
    },
    {
      name: "Lusail Stadium",
      img: "https://marvel-b1-cdn.bc0a.com/f00000000067087/www.bdcnetwork.com/sites/bdc/files/Lusail_Stadium.jpg",
      location: { 
        lat: 25.4207,
        lng: 51.4904
      },
    },
    {
      name: "Ras Abu Aboud Stadium",
      img: "data:image/jpeg;base64,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",
      location: { 
        lat: 25.2890,
        lng: 51.5663
      },
    },
    {
      name: "Al Thumama Stadium",
      img: "https://live.staticflickr.com/65535/50488606363_6f563012c7_c.jpg",
      location: { 
        lat: 25.2353,
        lng: 51.5324
      },
    }
  ];

  const [ selected, setSelected ] = useState({});
  
  const onSelect = item => {
    setSelected(item);
  }
  
  return (
     <LoadScript
       googleMapsApiKey='AIzaSyAcBUfQ8Kf9KdgbQDfmQmAVlw - CRlvKffo'>
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={defaultCenter}>
         {
            locations.map(item => {
              return (
              <Marker key={item.name} 
                position={item.location}
                onClick={() => onSelect(item)}
              />
              )
            })
         }
        {
            selected.location && 
            (
              <InfoWindow
              position={selected.location}
              clickable={true}
              onCloseClick={() => setSelected({})}
            >
              <div>
                <img src={selected.img} alt={selected.name} style={{width: '150px', height: '150px'}}  />
                <p>{selected.name}</p>

              </div>
            </InfoWindow>
            )
         }
     </GoogleMap>
     </LoadScript>
  )
}

export default MapContainer;

