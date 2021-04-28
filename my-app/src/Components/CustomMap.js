
import { APILoader,withMap} from '@uiw/react-baidu-map';
import ExampleMap from './ExampleMap';

function CustomMap(){
    
    const CustomWithMap = withMap(ExampleMap);

    return(
        <div style={{ width: '100%', height: '300px' }}>
            <APILoader akay="GTrnXa5hwXGwgQnTBG28SHBubErMKm3f">
              <CustomWithMap enableScrollWheelZoom zoom={11}/>
            </APILoader>
          </div>
    );

}



export default CustomMap