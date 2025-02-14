// import { useEffect, useState } from 'react';

// import '../style/comics-marvel.scss';
// import Profile from './profile';

// const publicKey = import.meta.env.VITE_PUBLIC_KEY;

// export default function ComicsMarvel() {
//   const [marvelComics, setMarvelComics] = useState([]);

//   useEffect(() => {
//     fetch(`https://gateway.marvel.com/v1/public/comics?apikey=${publicKey}`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Erreur réseau');
//         return res.json();
//       })
//       .then((data) => {
//         setMarvelComics(data.data.results);
//       })
//       // eslint-disable-next-line no-console
//       .catch((err) => console.error(err));
//   }, []);

//   return (
//     <div>
//       <h1>Comics Marvel</h1>
//       <div className='comics-box'>
//         {marvelComics
//           .filter((comics) => comics.thumbnail && comics.thumbnail.path && comics.thumbnail.extension)
//           .slice(0, 10)
//           .map((pictures) => (
//             <Profile
//               key={pictures.id}
//               img={`${pictures.thumbnail.path}.${pictures.thumbnail.extension}`}
//               title={`${pictures.title}`}
//               description={pictures.description ? `${pictures.description}` : 'No description available'}
//             />
//           ))}
//       </div>
//     </div>
//   );
// }
