import mochimarketlogo from 'assets/images/mochimarketlogo.png';
import './style.css';

export default function Projects() {
  return (
    <div className='achievements center container'>
      <div>
        <p className='big-title'>Projects</p>

        <a href='https://mochi.market'>
          <img className='mochimarket-logo' src={mochimarketlogo} alt='mochimarketlogo' />
        </a>
      </div>
    </div>
  );
}
