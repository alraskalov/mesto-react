
function App() {
  return (
    <div className="page">
      <header className="header page__header">
        <img
          className="header__logo"
          src="<%=require('./images/logo.svg')%>"
          alt="Логотип Место"
        />
      </header>
      <main className="content">
        <section className="profile page__profile">
          <div className="profile__info">
            <div className="avatar-container">
              <img
                src="<%=require('./images/avatar.jpg')%>"
                alt="Аватар"
                className="profile__avatar"
              />
              <button className="profile__avatar-edit"></button>
            </div>

            <div className="profile__user">
              <h1 className="profile__title"></h1>
              <p className="profile__subtitle"></p>
              <button
                className="profile__edit-button animation-button"
                type="button"
              ></button>
            </div>
          </div>
          <button
            type="button"
            className="profile__add-button animation-button"
          ></button>
        </section>
        <section className="grid-photo page__grid-photo"></section>
      </main>
      <footer className="footer page__footer">
        <p className="footer__copyright">&copy; 2021 Mesto Russia</p>
      </footer>

      <div className="popup popup-edit">
        <div className="popup__container">
          <h2 className="popup__title">Редактировать профиль</h2>
          <form name="edit" className="popup__form form-edit" novalidate>
            <fieldset className="popup__fieldset">
              <label className="popup__label">
                <input
                  className="popup__input"
                  id="user-name"
                  type="text"
                  name="userName"
                  placeholder="Ваше имя"
                  minlength="2"
                  maxlength="40"
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
                  minlength="2"
                  maxlength="200"
                  required
                />
                <span className="popup__input-error user-job-error"></span>
              </label>
              <button type="submit" className="popup__submit-btn">
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_initial"
                  >Сохранить</span
                >
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_loading"
                  >Сохранение...</span
                >
              </button>
            </fieldset>
          </form>
          <button
            type="button"
            className="popup__close-btn animation-button"
          ></button>
        </div>
      </div>

      <div className="popup popup-add">
        <div className="popup__container">
          <h2 className="popup__title">Новое место</h2>
          <form name="add" className="popup__form form-add" novalidate>
            <fieldset className="popup__fieldset">
              <label className="popup__label">
                <input
                  className="popup__input"
                  id="image-name"
                  type="text"
                  name="name"
                  placeholder="Название"
                  minlength="2"
                  maxlength="30"
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
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_initial"
                  >Сохранить</span
                >
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_loading"
                  >Сохранение...</span
                >
              </button>
            </fieldset>
          </form>
          <button
            type="button"
            className="popup__close-btn animation-button"
          ></button>
        </div>
      </div>

      <div className="popup popup-delete">
        <div className="popup__container">
          <h2 className="popup__title">Вы уверены?</h2>
          <form name="delete" className="popup__form form-delete" novalidate>
            <button type="submit" className="popup__submit-btn delete-button">
              <span
                className="popup__submit-btn-text popup__submit-btn-text_initial"
                >Да</span
              >
              <span
                className="popup__submit-btn-text popup__submit-btn-text_loading"
                >Удаление...</span
              >
            </button>
          </form>
          <button
            type="button"
            className="popup__close-btn animation-button"
          ></button>
        </div>
      </div>

      <div className="popup popup-avatar">
        <div className="popup__container">
          <h2 className="popup__title">Обновить аватар</h2>
          <form name="avatar" className="popup__form form-avatar" novalidate>
            <fieldset className="popup__fieldset">
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
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_initial"
                  >Сохранить</span
                >
                <span
                  className="popup__submit-btn-text popup__submit-btn-text_loading"
                  >Сохранение...</span
                >
              </button>
            </fieldset>
          </form>
          <button
            type="button"
            className="popup__close-btn animation-button"
          ></button>
        </div>
      </div>

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
    </div>
  );
}

export default App;
