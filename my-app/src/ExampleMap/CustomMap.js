
import { APILoader,withMap} from '@uiw/react-baidu-map';
import ExampleMap from './ExampleMap';

function CustomMap(){
    
    const CustomWithMap = withMap(ExampleMap);

    return(
        <div style={{ width: '100%', height: '300px' }}>
            <APILoader akay="bH5HcbEYQvE8zd3I5ZX1PuG9R8YxG3Uk">
              <CustomWithMap autoLocalCity enableScrollWheelZoom zoom={11} />
            </APILoader>
          </div>
    );

}



export default CustomMap