import Header from 'components/Header';
import DayNightContext from 'contexts/DayNightContext';
import { useState } from 'react';
import './style.scss';

const App = () => {
  const [theme, setTheme] = useState('light');
  return (
    <DayNightContext.Provider value={{
      theme,
      toggleTheme: () => {
        if (theme === 'light') setTheme('dark');
        if (theme === 'dark') setTheme('light');
      },
    }}
    >
      <div className={`App ${theme}`}>
        <Header />
      </div>
    </DayNightContext.Provider>
  );
};

export default App;
