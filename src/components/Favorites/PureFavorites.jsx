import React from "react";
import {Link} from "react-router-dom";
import './Favorites.scss';

const PureFavorites = ({props}) => {
  console.log(props)
  if (!props.books) return "Loading...";
  return (
    <div className={"PureFavorites"}>

      <Link to={'/'}>
        <button>Назад</button>
      </Link>

      {props.books.map((book) => (
        <div key={book.title} className={"favoriteBooks"}>
          <Link to={`/${book.id}`}>
            <li>{book.title}</li>
          </Link>
          <button onClick={() => props.deleteFavoriteBook(book)}>&times;</button>
        </div>))}

    </div>
  );
}

export default PureFavorites;