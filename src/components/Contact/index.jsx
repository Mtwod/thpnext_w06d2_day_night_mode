import './style.scss';

const Contact = () => {
  const intro = 'Vous souhaitez discuter avec moi, que ce soit pour me proposer un poste ou pour passer le temps pendant ce confinement ? Remplissez le formulaire ci-dessous, je vous contacterai dès que je le peux.';
  return (
    <div className="Contact">
      <p className="Contact__intro">{intro}</p>
      <form className="Contact__form">
        <input className="Contact__form__subject" type="text" placeholder="Subject" />
        <textarea className="Contact__form__message" name="contactArea" placeholder="Your message" />
      </form>
    </div>
  );
};

export default Contact;
