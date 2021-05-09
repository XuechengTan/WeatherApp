import React from 'react';
import GoogleMapReact from 'google-map-react'

class MapContainer extends React.Component {
    state = {
        location: this.props.location,
    }

    //display and refresh
    refresh = (newLocation) => {
        console.log("refresh success")
        this.setState({
            location: newLocation
        })
    }

    //get the current location
    getLongitudeAndLatitude = () => {
        return new Promise((resolve, reject) => {

            navigator.geolocation.getCurrentPosition(
                location => {
                    resolve([location.coords.longitude, location.coords.latitude]);
                },
                error => {
                    reject(error);
                }
            );
        })
    }

    getCityLocation() {
        let p =[]
         new Promise((resolve, reject) => {
            this.getLongitudeAndLatitude()
                //The method to get the latitude and longitude returns an array of latitude and longitude
                .then((locationArr) => {
                    p[0] = locationArr[1];
                    p[1] = locationArr[0]
                    this.componentDidUpdate(this.setState({ location: p }, () => console.log("your location: "+this.state.location)))
                }).catch((data) => {
            })
        })
    }

    render() {
        this.getCityLocation()
        return (
            <div className="Map">
                <GoogleMapReact
                    bootstrapURLKeys={ {key: "AIzaSyDOr6t4ExGs3TE8CTAGsI5tk3Zpor_Egow"} }
                    defaultZoom={11}
                    defaultCenter={[1,1]}
                    center={this.state.location}
                    yesIWantToUseGoogleMapApiInternals
                    currentLatLng={this.state.location}>
                </GoogleMapReact>
             </div>
        );
    }
}

export default MapContainer;
