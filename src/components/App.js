import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] =
    React.useState(false);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
      />
      <Footer />
      <PopupWithForm
        name="edit"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            className="popup__input"
            id="user-name"
            type="text"
            name="userName"
            placeholder="Ваше имя"
            minLength="2"
            maxLength="40"
            required
          />
          <span className="popup__input-error user-name-error"></span>
        </label>
        <label className="popup__label">
          <input
            className="popup__input"
            id="user-job"
            type="text"
            name="userJob"
            placeholder="Ваша профессия"
            minLength="2"
            maxLength="200"
            required
          />
          <span className="popup__input-error user-job-error"></span>
        </label>
        <button type="submit" className="popup__submit-btn">
          <span className="popup__submit-btn-text popup__submit-btn-text_initial">
            Сохранить
          </span>
          <span className="popup__submit-btn-text popup__submit-btn-text_loading">
            Сохранение...
          </span>
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="add"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            className="popup__input"
            id="image-name"
            type="text"
            name="name"
            placeholder="Название"
            minLength="2"
            maxLength="30"
            required
          />
          <span className="popup__input-error image-name-error"></span>
        </label>
        <label className="popup__label">
          <input
            className="popup__input"
            id="image-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error image-link-error"></span>
        </label>
        <button type="submit" className="popup__submit-btn">
          <span className="popup__submit-btn-text popup__submit-btn-text_initial">
            Сохранить
          </span>
          <span className="popup__submit-btn-text popup__submit-btn-text_loading">
            Сохранение...
          </span>
        </button>
      </PopupWithForm>
      <PopupWithForm name="delete" title="Вы уверены?" onClose={closeAllPopups}>
        <button type="submit" className="popup__submit-btn delete-button">
          <span className="popup__submit-btn-text popup__submit-btn-text_initial">
            Да
          </span>
          <span className="popup__submit-btn-text popup__submit-btn-text_loading">
            Удаление...
          </span>
        </button>
      </PopupWithForm>
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <label className="popup__label">
          <input
            className="popup__input popup__input-avatar"
            id="avatar-link"
            type="url"
            name="link"
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__input-error avatar-link-error"></span>
        </label>
        <button type="submit" className="popup__submit-btn">
          <span className="popup__submit-btn-text popup__submit-btn-text_initial">
            Сохранить
          </span>
          <span className="popup__submit-btn-text popup__submit-btn-text_loading">
            Сохранение...
          </span>
        </button>
      </PopupWithForm>
      <ImagePopup />
    </div>
  );
}

export default App;
