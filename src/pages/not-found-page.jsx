import { Link } from 'react-router-dom';

import '../style/not-found.scss';

export default function NotFoundPage() {
  return (
    <div className='not-found'>
      <h1> ERROR 404</h1>
      <div>
        <img src='/pictures/snap-3.png' alt='thanos snap' />
        <h2>“Snap! This page just got dusted.”</h2>
      </div>
      <div className='portal'>
        <Link to='/'>
          <p> “Go Home through this portal !”</p>
        </Link>
        <Link to='/'>
          <img className='portal-img' src='/pictures/portal.png' alt='portal image' />
        </Link>
      </div>
    </div>
  );
}
