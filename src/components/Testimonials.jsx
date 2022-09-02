// cards
import Card from './Testimonials-card';

const Testimonials = () => {
  return (
    <section className='testimonials'>
      <h2 className='testimonials__title fraunces w900 center light-gray'>
        CLIENT TESTIMONIALS
      </h2>

      <div className='testimonials__cards'>
        <Card
          name='Emily R.'
          position='Marketing Director'
          img='emily'
          text='We put our trust in Sunnyside and they
                delivered, making sure our needs were
                met and deadlines were always hit.' />
        <Card
          name='Thomas S.'
          position='Chief Operating Officer'
          img='thomas'
          text='Sunnyside’s enthusiasm coupled with
                their keen interest in our brand’s success
                made it a satisfying and enjoyable
                experience.' />
        <Card
          name='Jennie F.'
          position='Business Owner'
          img='jennie'
          text='Incredible end result! Our sales increased
                over 400% when we worked with
                Sunnyside. Highly recommended!' />
      </div>
    </section>
  );
};

export default Testimonials;