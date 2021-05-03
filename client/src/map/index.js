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

                    //可以获取到的数据
                    var result = "速度：" + location.coords.speed +
                        "\n经度：" + location.coords.longitude +
                        "\n纬度：" + location.coords.latitude +
                        "\n准确度：" + location.coords.accuracy +
                        "\n行进方向：" + location.coords.heading +
                        "\n海拔：" + location.coords.altitude +
                        "\n海拔准确度：" + location.coords.altitudeAccuracy +
                        "\n时间戳：" + location.timestamp;

                    // ToastAndroid.show("UTIl" + location.coords.longitude, ToastAndroid.SHORT);

                    resolve([location.coords.longitude, location.coords.latitude]);
                },
                error => {
                    // Alert.alert("获取位置失败：" + error, "")
                    reject(error);
                }
            );
        })
    }

    getCityLocation() {
        let p =[]
        let promise = new Promise((resolve, reject) => {

            this.getLongitudeAndLatitude()
                //获取经纬度的方法返回的是经纬度组成的数组
                .then((locationArr) => {
                    // Alert.alert("", "" + locationArr[1]);
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
                {console.log(this.state.location + "在MAP中的")}
                <GoogleMapReact
                    ref={c => this.googleMap = c}
                    bootstrapURLKeys={ {key: "AIzaSyDOr6t4ExGs3TE8CTAGsI5tk3Zpor_Egow"} }
                    defaultZoom={11}
                    defaultCenter={this.state.location}
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
