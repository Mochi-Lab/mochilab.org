import './style.css';
import logo from 'assets/images/logo.png';
import tele from 'assets/icons/icon-tele.png';
import twitter from 'assets/icons/icon-twitter.png';
import medium from 'assets/icons/icon-medium.png';
import discord from 'assets/icons/icon-discord.png';

export default function Footer() {
  return (
    <div className='footer'>
      <div className='center fla'>
        <div>
          <img className='footer-logo' src={logo} alt='logo' />
        </div>
        <div>
          <h4>MochiLab Foundation Ltd</h4>
        </div>
        <div>
          <p className='address'>3 Fraser Street #5-25 Duo Tower, Singapore</p>
        </div>
        <div>
          <a href='mailto:contact@mochilab.org'>
            <p className='address'>contact@mochilab.org</p>
          </a>
        </div>
      </div>
      <div className='copyright center'>
        <p className='copyright-font'>© Copyright 2021, MochiLab Foundation Ltd</p>
      </div>
    </div>
  );
}
