import { shallow } from 'enzyme';
import Forecast from '../forecast/index';


it('renders the Forecast component', () => {

    const wrapper = shallow(<Forecast/>);

    expect(wrapper).toContainExactlyOneMatchingElement('div');

});
