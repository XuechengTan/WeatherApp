import { shallow } from 'enzyme';
import Weather from '../weather/index';


it('renders the Forecast component', () => {

    const wrapper = shallow(<Weather/>);

    expect(wrapper).toContainExactlyOneMatchingElement('div');

});
