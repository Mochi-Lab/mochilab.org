import './style.css';
import imgIntroductions from 'assets/images/img-introductions.png';

export default function Introductions() {
  const mochilabURL = 'https://mochilab.org';
  return (
    <div className='introductions'>
      <div className='container'>
        <div className='row justify-content-between wrap-intro'>
          <div className='col-sm-12 col-md-12'>
            <div className='text-introductions'>
              <div className='slogan-intro'>
                <h1>MochiLab - Where NFT innovation is incubated</h1>
              </div>
              <div className='description-intro'>
                <p>
                  MochiLab is a team dedicated to developing practical and innovative technological
                  solutions to enable a seamless web3 NFT economy. The MochiLab team is a team of
                  passionate innovators, researchers, and builders who are committed to bringing
                  product-market-fit solutions to foster the growth of the NFT economy. We pride
                  ourselves on delivering the highest quality when it comes to cultivating new roads
                  in the crypto-space.
                </p>
                <p>
                  Our team combines strong blockchain engineering and research with technical
                  know-how and pragmatic business acumen. Mochilab is a high achieving and
                  accomplished team that has won numerous awards and prizes from various blockchain
                  hackathons, to name a few: Chainlink Hackathon, Defi & Cross-Border Finance, OP
                  Game Hackathon, Blockstack — Clarity Hackathon, etc, and most recently Binance
                  Hackathon- the future is now.
                </p>

                <p>
                  MochiLab is an incubator of future innovative DeFi and NFT projects. Currently
                  under construction is the game changing multi-chain decentralized exchange NFT
                  ecosystem, a “Super App” for NFTs. Paving the way for the future of NFTs, where
                  there is a problem, Mochilab has the solution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
