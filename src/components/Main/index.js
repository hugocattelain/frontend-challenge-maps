/* eslint-disable react-hooks/exhaustive-deps */
// Libraries
import React, { useEffect, useState } from 'react';

// Components
import { SelectInput } from './components/SelectInput';
import { List } from './components/List';

// UI Components
import Typography from '@material-ui/core/Typography';

// Utils
import API from '../../utils/API';

// Styles
import './Main.css';

const COORDS = {
  'Europe/Berlin': { lat: 52.518611, lng: 13.408333 },
};

const categories = [
  { text: 'All', value: 'all' },
  { text: 'Pizza', value: 'pizza' },
  { text: 'Burger', value: 'burger' },
  { text: 'Sushi', value: 'sushi' },
];

let mapsApiLoaded = null;
let mapInstance = null;
let markers = [];

const Main = () => {
  const [businesses, setBusinesses] = useState([]);
  const [category, setCategory] = useState(categories[0].value);

  // Loads Maps API
  useEffect(() => {
    mapsApiLoaded = window.setTimeout(checkMapsApi, 200);
  }, []);

  // Fetches new businesses when selected category changes
  useEffect(() => {
    if (!mapsApiLoaded) return;
    API.fetchRestaurantsByCategory(category)
      .then(res => {
        setBusinesses(res.businesses);
        placeMarkers(res.businesses);
      })
      .catch(err => console.log(err));
  }, [category, mapsApiLoaded]);

  const checkMapsApi = () => {
    if (window.google && window.google.maps) {
      window.clearTimeout(mapsApiLoaded);
      initMap();
    }
  };

  // Initiates the map
  const initMap = () => {
    const mapEl = document.getElementById('places-map');
    if (mapEl && !mapInstance) {
      mapInstance = new window.google.maps.Map(mapEl, {
        center: COORDS['Europe/Berlin'],
        zoom: 8,
      });
    }
  };

  // Deletes all markers in the array and pushes the new markers in the array; Sets the map on all markers
  const placeMarkers = businesses => {
    deleteMarkers();
    businesses.forEach(business => {
      var marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(
          business.coordinates.latitude,
          business.coordinates.longitude
        ),
        mapInstance,
        title: 'Hello World!',
        animation: window.google.maps.Animation.DROP,
      });
      markers.push(marker);
    });
    setMapOnAll(mapInstance);
  };

  // Sets the map on all markers in the array.
  const setMapOnAll = map => {
    markers.forEach(marker => {
      marker.setMap(map);
    });
  };

  // Removes the markers from the map, but keeps them in the array.
  const clearMarkers = () => {
    setMapOnAll(null);
  };

  // Deletes all markers in the array by removing references to them.
  const deleteMarkers = () => {
    clearMarkers();
    markers = [];
  };

  return (
    <main>
      <div id='places-map' className='places-map'></div>
      <div className='filter-bar'>
        <Typography variant='subtitle1' gutterBottom>
          Filter by category
        </Typography>
        <SelectInput
          options={categories}
          value={category}
          onChange={setCategory}
        />
      </div>
      <List items={businesses} />
    </main>
  );
};

export default Main;
