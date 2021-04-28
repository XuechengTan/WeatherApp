import React from 'react';

class ExampleMap extends React.Component {
  
  componentDidMount() {
      const { BMap, map} = this.props;

  
      const point = new BMap.Point(121.458965, 31.238775);
      const marker = new BMap.Marker(point);      // 创建标注
      map.addOverlay(marker);                     // 将标注添加到地图中
      
    console.log(map)


    }
    render() {
      return null;
    }
  }

  export default ExampleMap