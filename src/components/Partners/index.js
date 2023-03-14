import './style.css';
import cinchBlock from 'assets/partners/cinchblock.png';
import btxCapital from 'assets/partners/btx-capital.png';
import magnus from 'assets/partners/magnus_capital.png';
import raptor from 'assets/partners/raptor.png';
import x21 from 'assets/partners/x21.svg';
import daomaker from 'assets/partners/daomaker.png';
import blocksync from 'assets/partners/blocksync.png';
import mercurius from 'assets/partners/mercurius.png';
import moonWhale from 'assets/partners/moon-whale.png';
import plasm from 'assets/partners/astar-2.png';
import blackmamba from 'assets/partners/blackmamba.png';
import mintedlab from 'assets/partners/mintedlab.png';
import manticorecapital from 'assets/partners/manticorecapital.png';
import halborn from 'assets/partners/halborn-black.svg';
import polygon from 'assets/partners/polygon-logowhite.svg';
import kryptomon from 'assets/partners/kryptomon.png';
import bluca from 'assets/partners/bluca.svg';
import eightbit from 'assets/partners/eightbit.png';
import noftgames from 'assets/partners/noftgames.svg';
import rune from 'assets/partners/rune.png';
import cometh from 'assets/partners/cometh.svg';
import moonbeam from 'assets/partners/moonbeam.png';
import ecio from 'assets/partners/ecio.svg';
import harmony from 'assets/partners/harmony.svg';

const members = [
  {
    image: daomaker,
    url: 'https://daomaker.com/',
    name: 'Dao Maker',
    className: 'daomaker',
  },
  {
    image: plasm,
    url: 'https://www.astar.network/',
    name: 'plasmnet',
    className: 'polygon',
  },
  {
    image: polygon,
    url: 'https://polygon.technology/',
    name: 'polygon',
    className: 'polygon',
  },
  {
    image: moonbeam,
    url: 'https://moonbeam.network/',
    name: 'Moonbeam',
    className: 'moonbeam',
  },
  {
    image: harmony,
    url: 'https://www.harmony.one/',
    name: 'Harmony',
    className: 'harmony',
  },
  {
    image: magnus,
    url: 'https://magnusdigitalassets.com/',
    name: 'magnus capital',
    className: 'magnus',
  },
  {
    image: raptor,
    url: 'https://www.raptorcapital.io/',
    name: 'raptor capital',
    className: 'raptor',
  },
  {
    image: btxCapital,
    url: 'https://btx.capital/',
    name: 'btx capital',
    className: 'btxCapital',
  },
  {
    image: x21,
    url: 'https://x21digital.com/',
    name: 'x21 digital',
    className: 'x21',
  },
  {
    image: moonWhale,
    url: 'https://moonwhale.ventures/',
    name: 'moonwhale',
    className: 'moonWhale',
  },
  {
    image: cinchBlock,
    url: 'https://www.cinchblock.com/',
    name: 'cinch block',
    className: 'cinchBlock',
  },
  {
    image: blocksync,
    url: 'https://www.blocksync.com/',
    name: 'blocksync ventures',
    className: 'blocksync',
  },
  {
    image: mercurius,
    url: '',
    name: 'mercurius',
    className: 'mercurius',
  },
  {
    image: blackmamba,
    url: 'https://blackmamba.ventures/',
    name: 'Black Manba',
    className: 'blackmamba',
  },
  {
    image: mintedlab,
    url: 'https://minted-lab.com/about',
    name: 'Minted Lab',
    className: 'mintedlab',
  },
  {
    image: manticorecapital,
    url: 'https://manticore.vc/',
    name: 'Manticore Capital',
    className: 'manticorecapital',
  },
  {
    image: halborn,
    url: 'https://halborn.com/',
    name: 'Halborn',
    className: 'halborn',
  },
  {
    image: kryptomon,
    url: 'https://kryptomon.co/',
    name: 'Kryptomon',
    className: 'kryptomon',
  },
  {
    image: bluca,
    url: 'https://bluca.io/',
    name: 'Bluca',
    className: 'bluca',
  },
  {
    image: eightbit,
    url: 'http://eightbit.fun/',
    name: 'Eightbit',
    className: 'eightbit',
  },
  {
    image: noftgames,
    url: 'https://noftgames.io/',
    name: 'Noftgames',
    className: 'noftgames',
  },
  {
    image: rune,
    url: 'https://rune.game/',
    name: 'Rune',
    className: 'rune',
  },
  {
    image: cometh,
    url: 'https://www.cometh.io/',
    name: 'Cometh',
    className: 'cometh',
  },
  {
    image: ecio,
    url: 'https://ecio.space/',
    name: 'Ecio',
    className: 'ecio',
  },
];

function Partner({ data }) {
  const { image, name, url, className } = data;
  return (
    <a className='center' href={url} target='_blank' rel='noreferrer'>
      <div className='partner-card'>
        <img className={className} src={image} alt={name} />
      </div>
    </a>
  );
}

export default function Partners() {
  return (
    <div className='background-dark'>
      <div className='partners center container'>
        <div>
          <p className='big-title lc-color'>Investors And Partners</p>
        </div>
        <div>
          <div className='image-area row'>
            {members.map((partner, index) => (
              <div className='col-4 col-lg-3 center' key={index}>
                <Partner data={partner} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
