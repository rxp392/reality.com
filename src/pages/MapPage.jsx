import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl'
import { MapboxSearchBox } from '@mapbox/search-js-web';

function MapPage(props) {
  mapboxgl.accessToken = 'pk.eyJ1IjoicnhwMzkyIiwiYSI6ImNsc3FmbDg2MjBvYXQyam53dTRoY2FuMzIifQ.Pf2rWYJhcCo_xdNkbwCMcw';
  const mbxClient = require('@mapbox/mapbox-sdk');
  const mbxDataSet = require('@mapbox/mapbox-sdk/services/datasets');
  const baseClient = mbxClient({ accessToken: 'sk.eyJ1IjoicnhwMzkyIiwiYSI6ImNsc3Y2ZjNtZDBpNGMybHJxODN1NjhndjMifQ.HnosUlTyuFWGZXmkiFdZbw' });
  const datasetsClient = mbxDataSet(baseClient);

  const mapContainer = useRef(null);
  const map = useRef(null);
  let [currentLng, currentLat] = [-70.9, 42.35];
  //TODO: have to do set timeout, add potential clustering to data
  navigator.geolocation.getCurrentPosition((pos) => {
    currentLng = pos.coords.latitude;
    currentLat = pos.coords.longitude;
  }, function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  });
  console.log(currentLat, currentLng)
  const [lng, setLng] = useState(currentLng);
  const [lat, setLat] = useState(currentLat);



  // datasetsClient.createDataset({
  //     name: 'reviewpointerfinal',
  //     description: 'Holds all the reviews needed for marking'
  //   })
  //     .send()
  //     .then(response => {
  //       const datasetMetadata = response.body;
  //       console.log(datasetMetadata)
  //     }
  //     );


  // datasetsClient.putFeature({
  //     datasetId: 'clsv6iouw088r1zqbd6dc7219',
  //     featureId: 'Chicago City',
  //     feature: {
  //         "type": "Feature",
  //         "properties": { "name": "San Fran, Cali" },
  //         "geometry": {
  //           "type": "Point",
  //           "coordinates": [-122.414, 37.776]
  //         }
  //       }
  //     })
  //       .send()
  //       .then(response => {
  //         const feature = response.body;
  //       });
  // ;

  useEffect(() => {
    if (map.current) return;
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [lng, lat],
      zoom: 9
    })
    const search = new MapboxSearchBox();
    search.accessToken = mapboxgl.accessToken;
    map.current.addControl(search);
  })

  datasetsClient.listFeatures({
    datasetId: 'clsv6iouw088r1zqbd6dc7219',
  })
    .send()
    .then(response => {
      const features = response.body.features;
      console.log(features)
      for (const marker of features) {
        const el = document.createElement('div');
        el.className = 'marker';
        let add = map?.current ? new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).
          addTo(map.current) : '';

      }
    });



  return (<div>
    <div ref={mapContainer} className="map-container" />
  </div>
  );


}

export default MapPage;