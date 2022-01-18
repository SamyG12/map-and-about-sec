import { GoogleMap, InfoWindow, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState } from 'react';


const MapContainer = () => {
  //In case of need to resize please adjust the height and width
  const mapStyles = {        
    height: "70vh",
    width: "100%"};
  
    //default map lat and lng of Qatar
  const defaultCenter = {
    lat: 25.3548, lng: 51.1839
  }
  //16 to 81 represnets the pinned location using the lat and lng with the name of the venue
  //and a picture
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
      img: "https://as01.epimg.net/en/imagenes/2021/01/26/football/1611681042_772868_1611681554_noticia_normal.jpg",
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
          //the zoom of the map
          zoom={10}
          center={defaultCenter}>
         {
           //the next code grabs the name of the location the position and the 
           //picture. Displays it using a click
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
          //Info Window that pops using a click
          //Inside the div you're able to adjust the window pops
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

//Samy Gadi