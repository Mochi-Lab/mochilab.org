import './style.css';

export default function Achievements() {
  const achievements = [
    {
      title: 'Binance Hackathon',
      time: '2021-02-03',
      description: 'MoW - Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4334/mow',
      icon: 'https://gitcoin.co/dynamic/avatar/binancex',
    },
    {
      title: 'Binance Hackathon',
      time: '2021-02-03',
      description: 'Lendingswap - Third Prize and Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/binance/projects/4343/lendingswap',
      icon: 'https://gitcoin.co/dynamic/avatar/binancex',
    },
    {
      title: 'Hack the Horizon',
      time: '2021-01-25',
      description: 'First Prize',
      link: 'https://gitcoin.co/hackathon/hack-the-horizon/projects/4184/Lending-Swap',
      icon: 'https://gitcoin.co/dynamic/avatar/harmony-one',
    },
    {
      title: 'Icon Hyperhack Hackathon',
      time: '2020-10-01',
      description: 'Grand Prize',
      link: 'https://devpost.com/software/bonsai-exchange',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/117/118/datas/medium.png',
    },
    {
      title: 'Defi & Cross-Border Finance (Harmony-Cosmos-Cross)',
      time: '2020-10-22',
      description: 'First Place',
      link: 'https://devpost.com/software/harmony-cosmos-cross',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/174/827/datas/medium.png',
    },
    {
      title: 'Defi & Cross-Border Finance (CryptoPet)',
      time: '2020-10-22',
      description: '2 Runner-up prizes',
      link: 'https://devpost.com/software/cryptopet',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/174/827/datas/medium.png',
    },
    {
      title: 'Chainlink Hackathon',
      time: '2020-10-03',
      description: 'Runner up',
      link: 'https://devpost.com/software/goldedstarswap',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/127/601/datas/medium.png',
    },
    {
      title: 'Oasis Protocol Hackathon',
      time: '2020-12-16',
      description: 'Silver Prize',
      link: 'https://gitcoin.co/hackathon/oasis/projects/3719/secure-docs',
      icon: 'https://gitcoin.co/dynamic/avatar/oasisprotocol',
    },
    {
      title: 'Blockstack - Clarity Hackathon',
      time: '2020-08-14',
      description: 'Second Runner Up Prize',
      link: 'https://devpost.com/software/clarity-composable-token',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/001/160/225/datas/medium.png',
    },
    {
      title: 'OP Game Hackathon',
      time: '2020-08-09',
      description: 'First Place',
      link: 'https://gitcoin.co/hackathon/unitize/projects/1162/typing-racer',
      icon: 'https://gitcoin.co/dynamic/avatar/alto-io',
    },
    {
      title: 'IBM - Call For Code Vietnam Hackathon',
      time: '2020-08-09',
      description: 'Runner Up Prize (Trịnh Văn Tân)',
      link: 'http://congnghevadoisong.vn/vinh-danh-6-doi-xuat-sac-nhat-trong-cuoc-thi-soict-ibm-hackathon-2020-d32185.html',
      icon: 'https://www.ibm.com/blogs/ibm-anz/wp-content/uploads/2020/04/2020CFC_SocialTile_PreLaunch_TileA_NotAverageHackathon_TW_1024x512_R01.jpg',
    },
    {
      title: 'Cosmos & Band Protocol - Cross-Chain Hackathon',
      time: '2020-08-09',
      description: 'Honorable Mentions Prize',
      link: 'https://gitcoin.co/hackathon/cosmos/projects/635/$Sema',
      icon: 'https://gitcoin.co/dynamic/avatar/cosmos',
    },
    {
      title: 'Ocean Protocol Hackathon - Data Economy Challenge',
      time: '2020-02',
      description: 'Speedy Submission Prize',
      link: 'https://devpost.com/software/dalama-data-labeled-market',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/882/144/datas/medium.png',
    },
    {
      title: 'Honeycomb - Smart Contract Hackathon',
      time: '2019-12',
      description: 'World Weather Online Challenge Prize',
      link: 'https://devpost.com/software/evi',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/893/330/datas/medium.png',
    },
    {
      title: 'Torus Hackathon - Torus 4 Everyone',
      time: '2019-10',
      description: 'Runner up and Community Favorite Prize',
      link: 'https://devpost.com/software/ecopet-gdr6nu',
      icon: 'https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/challenge_thumbnails/000/827/425/datas/medium.png',
    },
    {
      title: 'TomoChain Dappathon',
      time: '2019-09',
      description: 'Runner-up, Third prize and Community Votes',
      link: 'https://medium.com/tomochain/tomochain-dappathon-champions-a13eecc410d8',
      icon: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/p148x148/88034291_503640036931248_2461775146969464832_n.png?_nc_cat=101&ccb=1-5&_nc_sid=1eb0c7&_nc_ohc=SOYlC5stTckAX8n0a5P&_nc_ht=scontent.fhan2-1.fna&oh=3011abaf07cf319e0366f1c61a4cb0fc&oe=61B2E9A3',
    }
  ];
  return (
    <div className='achievements container'>
      <p className='big-title'>Achievements</p>
      <div>
        <div className="row justify-content-center">
          {achievements.map((achievement, index) => (
            <div className="col-6 col-md-4 col-lg-3 mb-5" key={index}>
              <div className="card-achievement card flex-row flex-wrap">
                <div className="card-header card-header-achievement text-center col-12 px-0 d-flex">
                  <a href={achievement.link} className="m-auto" target="_blank" rel="noopener noreferrer">
                    <img className="hackathon-card-logo" src={achievement.icon} alt="Hackathon logo" />
                  </a>
                </div>
                <div className="card-body card-body-achievement col-12 d-flex flex-column justify-content-between">
                  <div className="title-and-dates">
                    <h5 className="text-center text-title">
                      <a href={achievement.link} className="text-center" target="_blank" rel="noopener noreferrer">
                        {achievement.title}
                      </a>
                    </h5>

                    <div className="text-center">
                      <time>{achievement.time}</time>
                    </div>
                  </div>

                  <div className="mt-3">
                    <p className="text-description">{achievement.description}</p>
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
