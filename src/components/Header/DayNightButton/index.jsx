import './style.scss';
import dayLogo from 'assets/images/day-logo.png';
import moonLogo from 'assets/images/moon-logo.png';
import dayNightContext from 'contexts/DayNightContext';
import { useContext } from 'react';

const DayNightButton = () => {
  const displayMode = useContext(dayNightContext);

  const buttonToDisplay = () => {
    if (displayMode.theme === 'light') {
      return (
        <img className="DayNightButton__image" src={moonLogo} alt="moon logo" />
      );
    }
    return (
      <img className="DayNightButton__image" src={dayLogo} alt="moon logo" />
    );
  };

  return (
    <button type="button" className="DayNightButton" onClick={displayMode.toggleTheme}>
      {buttonToDisplay()}
    </button>
  );
};

export default DayNightButton;
