import './navbar.css';
import Calender from './canlender'


function Navbar() {
  return (
    <div className="Navbar">
      {/* show the calender*/}
      <Calender  />
      <div className="title">Weather Forecast
      </div>
      <div className="project">Group-29-Aquamarine-Alpaca
      </div>
    </div>
  );
}

export default Navbar;