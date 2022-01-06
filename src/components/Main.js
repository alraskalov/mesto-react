import React from "react";
import api from "../utils/Api";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
      .changeLikeCard(card._id, isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then((newCards) => {
        setCards((state) => state.filter((c) => (c._id !== card._id)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <main className="content">
      <section className="profile page__profile">
        <div className="profile__info">
          <div onClick={props.onEditAvatar} className="avatar-container">
            <img
              src={currentUser.avatar}
              alt="Аватар"
              className="profile__avatar"
            />
            <button className="profile__avatar-edit"></button>
          </div>

          <div className="profile__user">
            <h1 className="profile__title">{currentUser.name}</h1>
            <p className="profile__subtitle">{currentUser.about}</p>
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
          <Card
            onCardClick={props.onCard}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            key={card._id}
            card={card}
          />
        ))}
      </section>
    </main>
  );
}

export default Main;
