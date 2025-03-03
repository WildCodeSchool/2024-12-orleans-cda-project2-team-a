import '../style/loader.scss';

const pictures = import.meta.env.BASE_URL;

export default function Loader() {
  return (
    <div className='load'>
      <img src={`${pictures}pictures/hammer.png`} alt='' />
    </div>
  );
}
