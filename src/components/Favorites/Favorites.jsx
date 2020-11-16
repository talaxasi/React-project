import React from "react";
import {connect} from "react-redux";
import PureFavorites from "./PureFavorites";
import {setFavoriteBook, deleteFavoriteBook} from "../../store/favorites/favoritesActions";

const Favorites = (props) => {
  return (
    <PureFavorites props={props}/>
  );
}

const mapStateToProps = state => ({
  favorites: state.favorites,
  books: state.bookId
})

const mapDispatchToProps = dispatch => ({
  setFavoriteBook: book => {
    dispatch(setFavoriteBook(book))
  },
  deleteFavoriteBook: book => {
    dispatch(deleteFavoriteBook(book))
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);