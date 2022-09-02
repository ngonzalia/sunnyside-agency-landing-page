const Modal = (props) => {
  return (
    <div className={`modal ${props.className}`}>
      <h2 className='modal__title'>
        {props.title}
      </h2>
      <p className='modal__text'>
        {props.text}
      </p>
    </div>
  );
};

export default Modal;