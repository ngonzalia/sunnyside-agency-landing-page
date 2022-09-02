const Card = (props) => {

  return (
    <div className='testimonials__card'>
      <img 
        src={require(`../assets/image-${props.img}.jpg`)}
        alt={`${props.name}`}
        className='testimonials__card__img' />
      
      <p className='testimonials__card__text barlow w600 center blue-metal'>
        {props.text}
      </p>

      <div className='testimonials__card__info'>
        <h3 className='testimonials__card__info--name fraunces w900 center dark-blue'>
          {props.name}
        </h3>
        <p className='testimonials__card__info--position barlow w600 center light-gray'>
          {props.position}
        </p>
      </div>
    </div>
  );
}

export default Card;