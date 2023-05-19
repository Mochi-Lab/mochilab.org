import './style.css';

import team from 'assets/team/mochiteam.jpg';

export default function MochiTeam() {
  return (
    <div className='mochi-team center container'>
      <div>
        <p className='big-title'>The Team</p>
        <img alt='team' src={team} />
      </div>
      <br />
      <br />
    </div>
  );
}
