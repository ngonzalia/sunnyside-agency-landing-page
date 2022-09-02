const Card = (props) => {
  return (
    <div className='fruits__card'>
      <h1 className={`fruits__title fraunces w900 center ${props.color1}`}>
        {props.title}
      </h1>
      <p className={`fruits__text barlow w600 center ${props.color2}`}>
        {props.text}
      </p>
    </div>
  );
};

export default Card;