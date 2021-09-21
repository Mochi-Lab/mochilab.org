import './style.css';
import Member from './Member';
import chien from 'assets/member/chien.png';
import cong from 'assets/member/cong.png';
import hoang from 'assets/member/hoang.png';
import kien from 'assets/member/kien.png';
import nghia from 'assets/member/nghia.png';
import tan from 'assets/member/tan.png';
import team from 'assets/team/mochiteam.jpg';

export default function MochiTeam() {
  const members = [
    {
      image: kien,
      name: 'Kevin Do',
      role: 'CO-FOUNDER & CEO',
      linkedin: 'https://www.linkedin.com/in/dotrungkien',
      twitter: 'https://twitter.com/kevindo90',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: chien,
      name: 'Charles Tran',
      role: 'CO-FOUNDER & CTO',
      linkedin: 'https://www.linkedin.com/in/chien-tran-b52339159',
      twitter: 'https://twitter.com/',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: tan,
      name: 'Elio Tan',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/elio-tan-b13b3a203/',
      twitter: 'https://twitter.com/TnTrnh5',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: nghia,
      name: 'Nolan Ngo',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/ngo-nolan-b5b67720b/',
      twitter: 'https://twitter.com/nolanngo97',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: cong,
      name: 'Roberto Le',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/l%C3%AA-th%C3%A0nh-c%C3%B4ng-b937a1164/',
      twitter: 'https://twitter.com/lwconga7',
      instagram: 'https://www.instagram.com/',
    },
    {
      image: hoang,
      name: 'Taio Newgate',
      role: 'CO-FOUNDER & DEV',
      linkedin: 'https://www.linkedin.com/in/taio-newgate-7027771b1/',
      twitter: 'https://twitter.com/SnowstormAnivia',
      instagram: 'https://www.instagram.com/',
    },
  ];

  return (
    <div className='mochi-team center container'>
      <div>
        <p className='big-title'>The Team</p>
        <img alt='team' src={team} />
      </div>
      <br />
      <div>
        <br />
        <div className='image-area'>
          {members.map((member, index) => (
            <Member key={index} data={member} />
          ))}
        </div>
      </div>

      <br />
    </div>
  );
}
