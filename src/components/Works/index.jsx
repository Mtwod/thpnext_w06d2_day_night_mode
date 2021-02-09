import './style.scss';

const Works = () => {
  const intro = 'Vous pourrez trouver ci-dessous la liste de mes projets. J\'en ai réalisé certains lors de ma formation chez The Hacking Project, et d\'autres sont des projets personnels.';

  const articleMedium = (
    <li className="Works__list__element">
      Un article&nbsp;
      <a href="https://maximewong.medium.com/fr-ruby-on-rails-comment-installer-la-gem-stripe-tutoriel-et-cas-simple-dutilisation-4e95a278846a">
        Medium
      </a>
      &nbsp;sur comment installer la gem Stripe sur Rails 5.2.4.4, en français.
    </li>
  );

  const kittyShop = (
    <li className="Works__list__element">
      Une&nbsp;
      <a href="https://online-shop-thp.herokuapp.com/">
        boutique pour chatons
      </a>
      , un projet demandé par THP vers la fin de la formation.
    </li>
  );

  const knowShare = (
    <li className="Works__list__element">
      Enfin, le projet final de la première partie de THP :&nbsp;
      <a href="https://knowshare-thp.herokuapp.com/">
        KnowShare
      </a>
      , un site fondé sur le partage de la connaissance.
    </li>
  );

  return (
    <div className="Works">
      <p className="Works__intro">{intro}</p>
      <ul className="Works__list">
        {articleMedium}
        {kittyShop}
        {knowShare}
      </ul>
    </div>
  );
};

export default Works;
