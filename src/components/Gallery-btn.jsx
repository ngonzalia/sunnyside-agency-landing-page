const Btn = (props) => {
  // hover effects
  const opacity1 = () => {
    const underline = document.getElementById(`underline--${props.color}`);
    underline.classList.add('opacity-1');
  };
  const opacity0 = () => {
    const underline = document.getElementById(`underline--${props.color}`);
    underline.classList.remove('opacity-1');
  };

  const showModal = () => {
    const modal = document.getElementById('modal');
    const app = document.getElementById('app');
    modal.classList.remove('hide');
    
    if(!modal.classList.contains('hide')) {
      app.addEventListener('click', () => {
        modal.classList.add('hide');
      });
    }
  };

  return(
  <div
    className='card__btn fraunces w900 center dark-blue'
    onMouseEnter={opacity1}
    onMouseLeave={opacity0}
    onClick={showModal}>
    LEARN MORE
    <div
      className={`card__btn__underline ${props.color}`}
      id={`underline--${props.color}`}>
    </div>
  </div>
  );
}

export default Btn;