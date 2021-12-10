function Main() {
  return (
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
  );
}

export default Main;
