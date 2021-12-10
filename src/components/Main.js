import React from "react";
import api from "../utils/Api";

function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив Кусто");
  const [userDescription, setUserDescription] = React.useState(
    "Исследователь океана"
  );
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    api
      .getUserInfo()
      .then((userDataResponse) => {
        setUserName(userDataResponse.name);
        setUserDescription(userDataResponse.about);
        setUserAvatar(userDataResponse.avatar);
        api
          .getInitialCards()
          .then((data) => {
            setCards(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={props.onEditAvatar} className="avatar-container">
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
            <button className="profile__avatar-edit"></button>
          </div>

          <div className="profile__user">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
            <button
              onClick={props.onEditProfile}
              className="profile__edit-button animation-button"
              type="button"
            ></button>
          </div>
        </div>
        <button
          onClick={props.onAddPlace}
          type="button"
          className="profile__add-button animation-button"
        ></button>
      </section>
      <section className="grid-photo page__grid-photo">
        {cards.map((card) => (
          <div key={card._id} className="grid-photo__element">
            <img src={card.link} alt={card.name} className="grid-photo__image" />
            <button
              type="button"
              className="grid-photo__delete-button animation-button"
            ></button>
            <div className="grid-photo__description">
              <h2 className="grid-photo__title">{card.name}</h2>
              <div className="like-container">
                <button
                  type="button"
                  className="grid-photo__like animation-like"
                ></button>
                <p className="like-counter">{card.likes.length}</p>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
