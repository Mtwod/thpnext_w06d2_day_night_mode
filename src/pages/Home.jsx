const Home = () => {
  const title = 'Bonjour, je m\'appelle Maxime WONG, bienvenue sur mon portfolio !';
  const presentation = 'Depuis quelques mois, j\'apprends le développement web grâce à The Hacking Projet. J\'ai ainsi pu apprendre à utiliser Ruby, Rails, JavaScript et React.';
  return (
    <div className="Home">
      <h1 className="Home__title">{title}</h1>
      <p className="Home__presentation">{presentation}</p>
    </div>
  );
};

export default Home;
