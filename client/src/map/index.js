import React from 'react';
import GoogleMapReact from 'google-map-react'





// import MapWithAMarker from 'google-map-react'

// const getLocation = () =>{
//     const pos = {};
//     const geolocation = navigator.geolocation;
//     if (geolocation) {
//         geolocation.getCurrentPosition(findLocal, showEror);
//     }
//     function findLocal(position){
//         pos.lat = position.coords.latitude;
//         pos.lng = position.coords.longitude;
//     }
//     function showEror(){console.log(Error)}
//     return pos;
// };
// const myLocation = getLocation();

class MapContainer extends React.Component {
    state = {
        location: this.props.lo
    }

    refresh = (newLocation) => {
        console.log("调用成功")
        this.setState({
            location: newLocation
        })
        console.log(this.googleMap)
    }
      

        // console.log(this.state.location)
        // this.googleMap.map.Center(newLocation)
    // }
    // showCurrentLocation = () => {
    //     if (navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         position => {
    //           this.setState(prevState => ({
    //             currentLatLng: {
    //               ...prevState.currentLatLng,
    //               lat: position.coords.latitude,
    //               lng: position.coords.longitude
    //             },
    //             isMarkerShown: true
    //           }))
    //         }
    //       )
    //     } else {
    //       error => console.log(error)
    //     }
    //   }

    render() {

        return (

            <div className="Map">
                {console.log(this.setState.location)}
                <GoogleMapReact 
                    ref={c => this.googleMap = c}
                    bootstrapURLKeys={ {key: "AIzaSyDOr6t4ExGs3TE8CTAGsI5tk3Zpor_Egow"} }
                    defaultZoom={11}

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
