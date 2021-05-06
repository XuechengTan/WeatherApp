import { shallow } from 'enzyme';
import Navbar from '../navbar/index';


it('renders the map component', () => {

    const wrapper = shallow(<Navbar/>);

    expect(wrapper).toContainExactlyOneMatchingElement('Calender');

});
