// cards
import Card from './Fruits-card';

const Fruits = () => {
  return (
    <section className='fruits'>
      <div className='fruits__container fruits__container--cherry'>
        <Card
          title='Graphic Design'
          text='Great design makes you memorable. We deliver
                artwork that underscores your brand message
                and captures potential clients’ attention.'
          color1='green'
          color2='green' />
      </div>

      <div className='fruits__container fruits__container--orange'>
        <Card
          title='Photography'
          text='Increase your credibility by getting the most
                stunning, high-quality photos that improve your
                business image.'
          color1='blue'
          color2='lightblue' />
      </div>
    </section>
  );
};

export default Fruits;