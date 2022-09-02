// components
import Card from './Gallery-card';

const Gallery = () => {

  return (
    <section className='gallery' id='gallery'>
      <div className='row row-reverse'>
        <div className='container container__egg'></div>
        <Card 
          title='Transform your brand'
          text='We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.'
          color='yellow'
          modalText='Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad cum assumenda quisquam eaque, at optio sit repudiandae, sint quidem dolore et, necessitatibus praesentium. Tempore fugiat non incidunt odit, ut officiis.
                      Accusamus harum soluta autem exercitationem fugiat, sed accusantium nisi, distinctio asperiores adipisci repellendus labore quia dolorem facere sunt cumque vitae magni aliquam quis, ullam quasi. Quaerat eaque ipsa id reprehenderit.
                      Nostrum quibusdam, debitis, eveniet sunt vitae a fugiat ipsa quis tenetur aspernatur neque, laborum quos similique maiores quasi voluptates. Distinctio, eius. Minima soluta unde sint nemo, ex perspiciatis id doloribus.' />
      </div>

      <div className='row'>
        <div className='container container__stand-out'></div>
        <Card
          title='Stand out to the right audience'
          text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
          color='red' />
      </div>



      <div className='modal hide scale-in-ver-top-allways' id='modal'>
        <div className='modal__column'>
          <h3 className='card__title fraunces w900 center start-desktop dark-blue'>
            Transform your brand
          </h3>
          <p className='card__text barlow w600 center start-desktop gray'>
            We are a full-service creative agency specializing in helping brands grow fast. Engage your clients through compelling visuals that do most of the marketing for you.
          </p>
        </div>
        <div className='modal__column'>
          <h3 className='card__title fraunces w900 center start-desktop dark-blue'>
            Stand out to the right audience
          </h3>
          <p className='card__text barlow w600 center start-desktop gray'>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Gallery;