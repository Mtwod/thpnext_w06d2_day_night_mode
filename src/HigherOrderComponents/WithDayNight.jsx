/* eslint-disable react/jsx-props-no-spreading */
import DayNightContext from 'contexts/DayNightContext';

const withDayNight = (Component) => (props) => (
  <DayNightContext.Consumer>
    {(dayNight) => <Component {...props} dayNightData={dayNight} />}
  </DayNightContext.Consumer>
);

export default withDayNight;
