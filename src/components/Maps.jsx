import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import { connect } from "react-redux";

const mapStyles = {
  width: "100%",
  height: "100%"
};

const mapStateToProps = state => {
  return {
    location: state.location
  }
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={8}
        style={mapStyles}
        initialCenter={this.props.location}>
        <Marker position={this.props.location} />
      </Map>
    );
  }
}

export default connect(mapStateToProps)(
  GoogleApiWrapper({
    apiKey: process.env.REACT_APP_API_KEY
  })(MapContainer)
);
