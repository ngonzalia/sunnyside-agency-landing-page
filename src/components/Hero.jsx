// nav
import Nav from './Nav';

// images
import Arrow from '../assets/icon-arrow-down.svg';

const Hero = () => {

  const gallery = '#gallery';

  return (
    <main className='main'>
      <Nav />

      <div className='main__content'>
        <h1 className='main__title fraunces w900 center white'>
          We are creatives
        </h1>

        <a href={gallery}>
          <img
            src={Arrow}
            alt='Arrow'
            className='main__arrow' />
        </a>
      </div>
    </main>
  );
};

export default Hero;