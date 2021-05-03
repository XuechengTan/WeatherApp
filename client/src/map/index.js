import React from 'react';
import GoogleMapReact from 'google-map-react'
import MapWithAMarker from 'google-map-react'
import ReactDOM from "react-dom";
// import React from "react";

import { GoogleMap, StandaloneSearchBox, Marker } from "@react-google-maps/api";
import axios from "axios";

class MapContainer extends React.Component {

    state = {
        location: this.props.location,

    }

    refresh = (newLocation) => {
        console.log("调用成功")
        this.setState({
            location: newLocation
        })
        console.log(newLocation)
    }

    getLongitudeAndLatitude = () => {

        //获取位置再得到城市先后顺序，通过Promise完成
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
        let promise = new Promise((resolve, reject) => {

            this.getLongitudeAndLatitude()
                //The method to get the latitude and longitude returns an array of latitude and longitude
                .then((locationArr) => {



                    p[0] = locationArr[1];
                    p[1] = locationArr[0]
                    // console.log(p)
                    this.componentDidUpdate(this.setState({ location: p }, () => console.log(this.state.location)))

                    // console.log(this.state.location)
                }).catch((data) => {

            })

        })
    }






    render() {
        this.getCityLocation()
        return (
            <div className="Map">
                {/*{console.log(this.state.location + "在MAP中的")}*/}
                <GoogleMapReact
                    ref={c => this.googleMap = c}
                    bootstrapURLKeys={ {key: "AIzaSyDOr6t4ExGs3TE8CTAGsI5tk3Zpor_Egow"} }
                    defaultZoom={11}
                    defaultCenter={[1,1]}
                    center={this.state.location}
                    yesIWantToUseGoogleMapApiInternals
                    currentLatLng={this.state.location}
                    >
                </GoogleMapReact>
            </div>
        );
    }
}


export default MapContainer;