function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }

  return (
    <div onClick={handleClick} className="grid-photo__element">
      <img
        src={props.card.link}
        alt={props.card.name}
        className="grid-photo__image"
      />
      <button
        type="button"
        className="grid-photo__delete-button animation-button"
      ></button>
      <div className="grid-photo__description">
        <h2 className="grid-photo__title">{props.card.name}</h2>
        <div className="like-container">
          <button
            type="button"
            className="grid-photo__like animation-like"
          ></button>
          <p className="like-counter">{props.card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
