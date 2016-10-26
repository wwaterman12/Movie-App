import React from 'react';
import { Link } from 'react-router';
import { GoogleMap, withGoogleMap } from "react-google-maps";

class Home extends React.Component {
  render() {
    const GettingStartedGoogleMap = withGoogleMap(props => (
      <GoogleMap
        defaultZoom={3}
        defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
      >
      </GoogleMap>
    ));
    return (
       <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: `100%` }} />
          }
          mapElement={
            <div style={{ height: `100%` }} />
          }
        />
        )
  }
}
export default Home;
