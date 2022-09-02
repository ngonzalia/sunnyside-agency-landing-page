// images
import Logo from '../assets/logo-green.svg';
import fb from '../assets/icon-facebook.svg';
import ig from '../assets/icon-instagram.svg';
import tw from '../assets/icon-twitter.svg';
import pt from '../assets/icon-pinterest.svg';

const Footer = () => {
  let deadLink = '#';

  return (
    <footer className='footer'>
      <img
        src={Logo}
        alt='Logo'
        className='footer__logo' />

      <div className='footer__links'>
        <a className='footer__links--link barlow w600 wintergreen' href={deadLink}>About</a>
        <a className='footer__links--link barlow w600 wintergreen' href={deadLink}>Services</a>
        <a className='footer__links--link barlow w600 wintergreen' href={deadLink}>Projects</a>
      </div>

      <div className='footer__social'>
        <img
          src={fb}
          alt='facebook'
          className='footer__social__link fb' />
        <img
          src={ig}
          alt='instagram'
          className='footer__social__link ig' />
        <img
          src={tw}
          alt='twitter'
          className='footer__social__link tw' />
        <img
          src={pt}
          alt='pinterest'
          className='footer__social__link pt' />
      </div>
    </footer>
  );
};

export default Footer;