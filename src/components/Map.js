import React, { Component } from 'react';
import { Marker, withGoogleMap, GoogleMap } from 'react-google-maps';
import '../styles/style.scss';

class Map extends Component {
   render() {
   const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { { lat: 59.303526, lng: 18.099216 } }
        defaultZoom = { 15 } >

        <Marker position={{ lat: 59.303526, lng: 18.099216 }}/>
      </GoogleMap>
   ));
   return(
      <div>
        <GoogleMapExample
          containerElement={ <div
            style={{ height: '350px', width: '350px',
                    marginLeft: '100px', marginTop: '220px'
           }} /> }
          mapElement={ <div style={{ height: `100%` }} /> }
        />
      </div>
   );
   }
};
export default Map;
