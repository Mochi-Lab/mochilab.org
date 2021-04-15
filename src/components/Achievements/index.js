import './style.css';

export default function Achievements() {
  const achievements = [
    {
      title:
        'Binance Hackathon - The Future Is Now: 2021-02-03 Won Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4334/mow',
    },
    {
      title:
        'Binance Hackathon - The Future Is Now: 2021-02-03 Won Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4343/lendingswap',
    },
    {
      title: 'Hack the Horizon: 2021-01-25 Won First Prize',
      link: 'https://gitcoin.co/hackathon/hack-the-horizon/projects/4184/Lending-Swap',
    },
    {
      title: 'Icon Hyperhack Hackathon 2020-10-01 Won Grand Prize',
      link: 'https://devpost.com/software/bonsai-exchange',
    },
    {
      title: 'Defi & Cross-Border Finance: 2020-10-22 Won First Place',
      link: 'https://devpost.com/software/harmony-cosmos-cross',
    },
    {
      title: 'Defi & Cross-Border Finance: 2020-10-22 Won 2 Runner-up prizes',
      link: 'https://devpost.com/software/cryptopet',
    },
    {
      title: 'Chainlink Hackathon: 2020-10-03 Won Runner up',
      link: 'https://devpost.com/software/goldedstarswap',
    },
    {
      title: 'Oasis Protocol Hackathon: 2020-12-16 Won Silver Prize',
      link: 'https://gitcoin.co/hackathon/oasis/projects/3719/secure-docs',
    },
    {
      title: 'Blockstack - Clarity Hackathon 2020-08-14 Won Second Runner Up Prize',
      link: 'https://devpost.com/software/clarity-composable-token',
    },
    {
      title: 'OP Game Hackathon 2020-08-09 Won First Place',
      link: 'https://gitcoin.co/hackathon/unitize/projects/1162/typing-racer',
    },
    {
      title: 'IBM - Call For Code Vietnam Hackathon 2020-07-12 Won Runner Up Prize',
      link: '',
    },
    {
      title:
        'Cosmos & Band Protocol - Cross-Chain Hackathon 2020-04-27 Won Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/cosmos/projects/635/$Sema',
    },
    {
      title:
        'Ocean Protocol Hackathon - Data Economy Challenge (02/2020): Won Speedy Submission Prize',
      link: 'https://devpost.com/software/dalama-data-labeled-market',
    },
    {
      title:
        'Honeycomb - Smart Contract Hackathon (12/2019): Won World Weather Online Challenge Prize',
      link: 'https://devpost.com/software/evi',
    },
    {
      title:
        'Torus Hackathon - Torus 4 Everyone (10/2019): Won Runner up and Community Favorite Prize',
      link: 'https://devpost.com/software/ecopet-gdr6nu',
    },
    {
      title: 'TomoChain Dappathon (09/2019): Won Runner-up, Third prize and Community Votes',
      link: 'https://medium.com/tomochain/tomochain-dappathon-champions-a13eecc410d8',
    },
  ];
  return (
    <div className='achievements center container'>
      <div>
        <p className='big-title'>Achievements</p>
        {achievements.map((achievement, index) => (
          <div className='achievement'>
            <h6>{achievement.title}</h6>
            <a href={achievement.link}>{achievement.link}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
