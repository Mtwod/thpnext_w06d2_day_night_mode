import './style.scss';
// import dayLogo from 'assets/images/day-logo.png';
import moonLogo from 'assets/images/moon-logo.png';

const DayNightButton = () => (
  <button type="button" className="DayNightButton">
    <img className="DayNightButton__image" src={moonLogo} alt="moon logo" />
  </button>
);

export default DayNightButton;
