import mochimarketlogo from 'assets/images/mochimarketlogo.png';
import wanakalogo from 'assets/images/wanakalogo.svg';
import './style.css';

export default function Projects() {
  return (
    <div className='achievements center container'>
      <div>
        <p className='big-title'>Projects</p>

        <a href='https://mochi.market'>
          <img className='mochimarket-logo' src={mochimarketlogo} alt='mochimarketlogo' />
        </a>

        <a href='https://wanakafarm.com/'>
          <img className='mochimarket-logo' src={wanakalogo} alt='wanakalogo' />
        </a>
      </div>
    </div>
  );
}
