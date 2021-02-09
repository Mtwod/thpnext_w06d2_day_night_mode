import Header from 'components/Header';
import Works from 'components/Works';
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
        <h1 className="App__title">Bonjour, je m&apos;appelle Maxime WONG. Bienvenue sur mon portfolio !</h1>
        <p className="App__presentation">Depuis quelques mois, j&apos;apprends le développement web grâce à The Hacking Projet. J&apos;ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.</p>
        <Works />
      </div>
    </DayNightContext.Provider>
  );
};

export default App;
