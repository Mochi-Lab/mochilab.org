import './style.css';

import binance from 'assets/hackathons/binance.png';
import harmony from 'assets/hackathons/harmony-one.png';
import icx from 'assets/hackathons/icon-hyperhack.png';
import chainlink from 'assets/hackathons/chainlink.png';
import oasis from 'assets/hackathons/oasisprotocol.png';
import opgame from 'assets/hackathons/op-game.png';
import cosmos from 'assets/hackathons/cosmos.png';
import oceanprotocol from 'assets/hackathons/ocean-protocol.png';
import honeycomb from 'assets/hackathons/honeycomb.png';
import callforcode from 'assets/hackathons/call-for-code.png';
import tomochain from 'assets/hackathons/tomo.png';
import torus from 'assets/hackathons/torus4everyone.png';
import blockstack from 'assets/hackathons/blockstack.png';

export default function Achievements() {
  const achievements = [
    {
      title: 'Binance Hackathon',
      time: '2021-02-03',
      description: 'MoW - Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4334/mow',
      icon: binance,
    },
    {
      title: 'Binance Hackathon',
      time: '2021-02-03',
      description: 'Lendingswap - Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4343/lendingswap',
      icon: binance,
    },
    {
      title: 'Hack the Horizon',
      time: '2021-01-25',
      description: 'First Prize',
      link: 'https://gitcoin.co/hackathon/hack-the-horizon/projects/4184/Lending-Swap',
      icon: harmony,
    },
    {
      title: 'Icon Hyperhack Hackathon',
      time: '2020-10-01',
      description: 'Grand Prize',
      link: 'https://devpost.com/software/bonsai-exchange',
      icon: icx,
    },
    {
      title: 'Defi & Cross-Border Finance (Harmony-Cosmos-Cross)',
      time: '2020-10-22',
      description: 'First Place',
      link: 'https://devpost.com/software/harmony-cosmos-cross',
      icon: harmony,
    },
    {
      title: 'Defi & Cross-Border Finance (CryptoPet)',
      time: '2020-10-22',
      description: '2 Runner-up prizes',
      link: 'https://devpost.com/software/cryptopet',
      icon: harmony,
    },
    {
      title: 'Chainlink Hackathon',
      time: '2020-10-03',
      description: 'Runner up',
      link: 'https://devpost.com/software/goldedstarswap',
      icon: chainlink,
    },
    {
      title: 'Oasis Protocol Hackathon',
      time: '2020-12-16',
      description: 'Silver Prize',
      link: 'https://gitcoin.co/hackathon/oasis/projects/3719/secure-docs',
      icon: oasis,
    },
    {
      title: 'Blockstack - Clarity Hackathon',
      time: '2020-08-14',
      description: 'Second Runner Up Prize',
      link: 'https://devpost.com/software/clarity-composable-token',
      icon: blockstack,
    },
    {
      title: 'OP Game Hackathon',
      time: '2020-08-09',
      description: 'First Place',
      link: 'https://gitcoin.co/hackathon/unitize/projects/1162/typing-racer',
      icon: opgame,
    },
    {
      title: 'IBM - Call For Code Vietnam Hackathon',
      time: '2020-08-09',
      description: 'Runner Up Prize (Trịnh Văn Tân)',
      link: 'http://congnghevadoisong.vn/vinh-danh-6-doi-xuat-sac-nhat-trong-cuoc-thi-soict-ibm-hackathon-2020-d32185.html',
      icon: callforcode,
    },
    {
      title: 'Cosmos & Band Protocol - Cross-Chain Hackathon',
      time: '2020-08-09',
      description: 'Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/cosmos/projects/635/$Sema',
      icon: cosmos,
    },
    {
      title: 'Ocean Protocol Hackathon - Data Economy Challenge',
      time: '2020-02',
      description: 'Speedy Submission Prize',
      link: 'https://devpost.com/software/dalama-data-labeled-market',
      icon: oceanprotocol,
    },
    {
      title: 'Honeycomb - Smart Contract Hackathon',
      time: '2019-12',
      description: 'World Weather Online Challenge Prize',
      link: 'https://devpost.com/software/evi',
      icon: honeycomb,
    },
    {
      title: 'Torus Hackathon - Torus 4 Everyone',
      time: '2019-10',
      description: 'Runner up and Community Favorite Prize',
      link: 'https://devpost.com/software/ecopet-gdr6nu',
      icon: torus,
    },
    {
      title: 'TomoChain Dappathon',
      time: '2019-09',
      description: 'Runner-up, Third prize and Community Votes',
      link: 'https://medium.com/tomochain/tomochain-dappathon-champions-a13eecc410d8',
      icon: tomochain,
    },
  ];
  return (
    <div className='achievements container'>
      <p className='big-title'>Achievements</p>
      <div>
        <div className='row justify-content-center'>
          {achievements.map((achievement, index) => (
            <div className='col-6 col-md-4 col-lg-3 mb-5' key={index}>
              <div className='card-achievement card flex-row flex-wrap'>
                <div className='card-header card-header-achievement text-center col-12 px-0 d-flex'>
                  <a
                    href={achievement.link}
                    className='m-auto'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <img
                      className='hackathon-card-logo'
                      src={achievement.icon}
                      alt='Hackathon logo'
                    />
                  </a>
                </div>
                <div className='card-body card-body-achievement col-12 d-flex flex-column justify-content-between'>
                  <div className='title-and-dates'>
                    <h5 className='text-center text-title'>
                      <a
                        href={achievement.link}
                        className='text-center'
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {achievement.title}
                      </a>
                    </h5>

                    <div className='text-center'>
                      <time>{achievement.time}</time>
                    </div>
                  </div>

                  <div className='mt-3'>
                    <p className='text-description'>{achievement.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
