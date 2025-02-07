import '../style/profile-page.scss';

export default function Profile({ characterProfil, profimage, img, title, description }) {
  return (
    <div className='comics-characters'>
      <p>{characterProfil} </p>;
      <div className='character-content'>
        <div className='div'>
          <img src={profimage} alt='yoyo' />
          <h2>
            {' '}
            {'title'} {characterProfil}{' '}
          </h2>
          <button>Event</button>
          <button>History</button>
        </div>
        <p> {'hello'} </p>
      </div>
      <div className='comics'>
        <h2>Comics</h2>
        <div className='comics-list'>
          <img src={img} alt='' />
          <h2> {title} </h2>
          <p> {description} </p>
        </div>{' '}
      </div>
    </div>
  );
}

// le profile doit afficher une image du personnage (en dessous de l'image se trouve un bouton event et history) un description et un titre ensuite juste en dessous une section qui contient un ensemble de comics
