import React from 'react';




class ExampleMap extends React.Component {
  
  componentWillMount() {
      const {BMap} = this.props;
  
      var geolocation = new BMap.Geolocation();
     geolocation.getCurrentPosition(function(r){
      if(r.point == null){
          alert('failed')
      }else{
        console.log(r.point.lng, r.point.lat);
      }                        
  }) 
          
    }
    render() {
      return null;
    }
  }

export default ExampleMap



