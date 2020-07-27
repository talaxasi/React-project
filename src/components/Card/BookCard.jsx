import React from "react";
import {connect} from "react-redux";
import PureBookCard from "./PureBookCard";
import {setFavoriteBook, deleteFavoriteBook} from "../../store/favorites/favoritesActions";

const BookCard = (props) => {
  return (
    <PureBookCard props={props}/>
  );
}

const mapStateToProps = state => ({
  favoriteBooks: state.favorites
})

const mapDispatchToProps = dispatch => ({
  setFavoriteBook: book => {
    dispatch(setFavoriteBook(book))
  },
  deleteFavoriteBook: book => {
    dispatch(deleteFavoriteBook(book))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(BookCard);