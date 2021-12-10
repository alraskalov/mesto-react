function ImagePopup() {
  return (
    <div className="popup popup-image">
      <div className="popup__container popup__container-image">
        <figure className="popup__figure">
          <img className="popup__image" />
          <figcaption className="popup__subtitle"></figcaption>
        </figure>
        <button
          type="button"
          className="popup__close-btn animation-button"
        ></button>
      </div>
    </div>
  );
}
