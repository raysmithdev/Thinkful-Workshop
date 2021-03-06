import React from 'react'
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapView = withGoogleMap(props => (
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={3}
    defaultCenter={{ lat: 40.732518, lng: -73.993337 }}
  >
    {props.markers.map((marker, index) => (
      <Marker
        {...marker}
        onRightClick={() => props.onMarkerRightClick(index)}
        key={index}
        onClick={() => ( console.log("Clicked!"))}
      />
    ))}
  </GoogleMap>
));

export default MapView

// export default class GettingStartedExample extends Component {
//
//   state = {
//     markers: [{
//       position: {
//         lat: 25.0112183,
//         lng: 121.52067570000001,
//       },
//       key: `Taiwan`,
//       defaultAnimation: 2,
//     }],
//   };
//
//   handleMapLoad = this.handleMapLoad.bind(this);
//   handleMapClick = this.handleMapClick.bind(this);
//   handleMarkerRightClick = this.handleMarkerRightClick.bind(this);
//
//   handleMapLoad(map) {
//     this._mapComponent = map;
//     if (map) {
//       console.log(map.getZoom());
//     }
//   }
//
//   /*
//    * This is called when you click on the map.
//    * Go and try click now.
//    */
//   handleMapClick(event) {
//     const nextMarkers = [
//       ...this.state.markers,
//       {
//         position: event.latLng,
//         defaultAnimation: 2,
//         key: Date.now(), // Add a key property for: http://fb.me/react-warning-keys
//       },
//     ];
//     this.setState({
//       markers: nextMarkers,
//     });
//
//     if (nextMarkers.length === 3) {
//       this.props.toast(
//         `Right click on the marker to remove it`,
//         `Also check the code!`
//       );
//     }
//   }
//
//   handleMarkerRightClick(targetMarker) {
//     /*
//      * All you modify is data, and the view is driven by data.
//      * This is so called data-driven-development. (And yes, it's now in
//      * web front end and even with google maps API.)
//      */
//     const nextMarkers = this.state.markers.filter(marker => marker !== targetMarker);
//     this.setState({
//       markers: nextMarkers,
//     });
//   }
//
//   render() {
//     return (
//       <div style={{height: `100%`}}>
//         <Helmet
//           title="Getting Started"
//         />
//         <GettingStartedGoogleMap
//           containerElement={
//             <div style={{ height: `100%` }} />
//           }
//           mapElement={
//             <div style={{ height: `100%` }} />
//           }
//           onMapLoad={this.handleMapLoad}
//           onMapClick={this.handleMapClick}
//           markers={this.state.markers}
//           onMarkerRightClick={this.handleMarkerRightClick}
//         />
//       </div>
//     );
//   }
// }
