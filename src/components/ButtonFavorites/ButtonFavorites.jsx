import React from "react";

const ButtonFavorites = ({props}) => {
  const {bookCard} = props;
  const isFavorite = props.favoriteBooks.some((book) => book.id === bookCard.id);

  if (isFavorite) return (
    <button className={"delete-from-favorites"}
            onClick={() => props.deleteFavoriteBook(bookCard)}
    >Удалить из избранного &#128465;</button>
  );

  return (
    <button className={"to-favorites"}
            onClick={() => props.setFavoriteBook(bookCard)}
    >В избранное &#128293;</button>
  );
};

export default ButtonFavorites;