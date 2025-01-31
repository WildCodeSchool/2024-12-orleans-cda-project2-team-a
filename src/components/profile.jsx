import '../style/profile.scss';

export default function Profile() {
  return (
    <div className='profile'>
      {' '}
      <section className='profile-container'>
        <div>
          <img src='/thanos.png' alt='' />
          <div className='btn'>
            <button>Event</button>
            <button>History</button>
          </div>
        </div>
        <div className='container'>
          <h2>Bio</h2>
          <p>
            The Mad Titan Thanos, a melancholy, brooding individual, consumed with the concept of death, sought out
            personal power and increased strength, endowing himself with cybernetic implants until he became more
            powerful than any of his brethren.
          </p>
        </div>
      </section>
      <section className='comics'>
        <div className='comic-container'>
          <div>
            <img src='/comics.png' alt='' />
            <h3>Description</h3>
            <p>
              Comic books have captured the imagination of readers for nearly a century. From the golden age of
              superheroes in the 1930s to the modern cinematic universes, comics have become a cultural phenomenon. They
              are more than just colorful panels and speech bubbles; they are a medium of
            </p>
          </div>
          <div>
            <img src='/comics.png' alt='' />
            <h3>Description</h3>
            <p>
              Comic books have captured the imagination of readers for nearly a century. From the golden age of
              superheroes in the 1930s to the modern cinematic universes, comics have become a cultural phenomenon. They
              are more than just colorful panels and speech bubbles; they are a medium of
            </p>
          </div>
          <div>
            <img src='/comics.png' alt='' />
            <h3>Description</h3>
            <p>
              Comic books have captured the imagination of readers for nearly a century. From the golden age of
              superheroes in the 1930s to the modern cinematic universes, comics have become a cultural phenomenon. They
              are more than just colorful panels and speech bubbles; they are a medium of
            </p>
          </div>
          <div>
            <img src='/comics.png' alt='' />
            <h3>Description</h3>
            <p>
              Comic books have captured the imagination of readers for nearly a century. From the golden age of
              superheroes in the 1930s to the modern cinematic universes, comics have become a cultural phenomenon. They
              are more than just colorful panels and speech bubbles; they are a medium of
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
