// images
import Logo from '../assets/logo.svg';
import Toggle from '../assets/icon-hamburger.svg';

const Nav = () => {

  const deadLink = '#';

  const showLinks = () => {
    const nav = document.getElementById('nav');
    nav.classList.toggle('hide');
  };

  const redirect = () => {
    window.location.href = 'https://github.com/ngonzalia';
  };

  return (
    <nav className='nav'>
      <a href={deadLink}>
        <img
          src={Logo}
          alt='Sunnyside'
          className='nav__logo' />

      </a>

      <button id='btn' className='nav__toggle' type='button'>
        <img
          src={Toggle}
          alt='Button'
          className='nav__toggle-img'
          onClick={showLinks} />
      </button>
      <div id='nav' className='nav__links scale-in-ver-top'>
        <div id='triangle' className='triangle'></div>
        <ul>
          <li><a href={deadLink} className='nav__links--link barlow w600 center gray'>About</a></li>
          <li><a href={deadLink} className='nav__links--link barlow w600 center gray'>Services</a></li>
          <li><a href={deadLink} className='nav__links--link barlow w600 center gray'>Projects</a></li>
          <button className='nav__links--btn fraunces w700 center dark-blue' type='button' onClick={redirect}>CONTACT</button>
        </ul>
      </div>
      
    </nav>
  );
};

export default Nav;