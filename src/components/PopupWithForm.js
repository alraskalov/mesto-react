function PopupWithForm(props) {
  return (
    <div
      className={`popup popup-${props.name} ${
        props.isOpen ? "popup_opened" : ""
      }`}
    >
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>
        <form
          name={`${props.name}`}
          className="popup__form form-avatar"
          noValidate
        >
          <fieldset className="popup__fieldset">{props.children}</fieldset>
        </form>
        <button
          type="button"
          className="popup__close-btn animation-button"
        ></button>
      </div>
    </div>
  );
}

export default PopupWithForm;
