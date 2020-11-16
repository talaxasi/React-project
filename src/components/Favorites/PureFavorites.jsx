import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './Favorites.scss';

const loadLocalStoreFavorites = key => {
  try {
    const favorites = localStorage.getItem(key);
    const localStorageFavorites = JSON.parse(favorites);
    return localStorageFavorites;
  } catch (e) {
    console.log('loadLocalStoreFavorites', e)
  }
}

const PureFavorites = ({props}) => {

  const [favorites, setFavorites] = useState(loadLocalStoreFavorites('favorites'));
  const [books, setBooks] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/books')
      .then(response => response.json())
      .then(data => setBooks(data))
  }, []);

  if (!favorites) return "Loading... state";
  if (books[0] == undefined) return "Loading... books";
  return (
    <div className={"PureFavorites"}>
      <h1>Избранное!</h1>

      <Link to={'/'}>
        <button>Назад</button>
      </Link>
      <div className={"favoriteBooks"}>
        {favorites.map((id) => (
          <div key={books[id].title} className={"favoriteBooks-item"}>
            <h3>{books[id].title}</h3>
            <div className={"image"}>
              <img src={books[id].image} alt={books[id].title}/>
            </div>
            <Link to={`/${id}`}>
              <p>к карточке товара</p>
            </Link>
            <button onClick={() => {
              props.deleteFavoriteBook(books[id]);
              setFavorites(loadLocalStoreFavorites('favorites'))
            }}>&times;</button>
          </div>))}
      </div>
    </div>
  );
}

export default PureFavorites;