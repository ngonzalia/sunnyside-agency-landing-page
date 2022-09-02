import Button from './Gallery-btn';

const Card = (props) => {

  return (
    <div className={`card card--${(props.color)}`}>
      <h2 className='card__title fraunces w900 center start-desktop dark-blue'>
        {props.title}
      </h2>
        <p className='card__text barlow w600 center start-desktop gray'>
          {props.text}
        </p>
      <Button color={props.color} />
    </div>
  );
};

export default Card;