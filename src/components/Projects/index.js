import mochi from 'assets/images/mochimarketlogo.png';
import wanaka from 'assets/images/wanakalogo.png';
import mochipad from 'assets/images/mochipad-logo.svg';
import './style.css';

const members = [
  {
    image: mochi,
    url: 'https://mochi.market',
    name: 'Mochi Market',
    className: 'mochi',
  },
  {
    image: wanaka,
    url: 'https://wanakafarm.com/',
    name: 'Wanaka Farm',
    className: 'wanaka',
  },

  {
    image: mochipad,
    url: 'https://mochipad.io/',
    name: 'MochiPad',
    className: 'mochi',
  },
];

function Project({ data }) {
  const { image, name, url, className } = data;
  return (
    <a className='center' href={url} target='_blank' rel='noreferrer'>
      <div className='project-card'>
        <img className={className} src={image} alt={name} />
      </div>
    </a>
  );
}

export default function Projects() {
  return (
    <div className='projects center container'>
      <div>
        <div>
          <p className='big-title lc-color'>Projects</p>
        </div>
        <div>
          <div className='image-area row'>
            {members.map((project, index) => (
              <div className='col-4 col-lg-3 center' key={index}>
                <Project data={project} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
