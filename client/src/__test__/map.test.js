import { shallow } from 'enzyme';
import Map from '../map/index';


it('renders the map component', () => {

    const wrapper = shallow(<Map/>);

    expect(wrapper).toContainExactlyOneMatchingElement('t');

});


