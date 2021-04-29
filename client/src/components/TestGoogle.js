import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'

import {GoogleApiWrapper} from 'google-maps-react';

const AnyReactComponent = ({ text }) => <div>{ text }</div>;

 class GGMap extends Component {
  static defaultProps = {
    center: { lat: 40.7446790, lng: -73.9485420 },
    zoom: 11
  }
render() {
    return (
      <div className='google-map' style={{ width: '100%', height: '300px' }}>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }>
          <AnyReactComponent
            lat={ 40.7473310 }
            lng={ -73.8517440 }
            text={ 'Wheres Waldo?'} 
            />
        </GoogleMapReact>
      </div>
    )
  }
}



export default GoogleApiWrapper({
    apiKey: ('AIzaSyDOr6t4ExGs3TE8CTAGsI5tk3Zpor_Egow')
  })(GGMap);