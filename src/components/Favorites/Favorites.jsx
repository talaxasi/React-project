import React from "react";
import {connect} from "react-redux";
import PureFavorites from "./PureFavorites";
import {setFavoriteBook, deleteFavoriteBook} from "../../store/favorites/favoritesActions";
import store from "../../store";

const saveToLocalStorageFavorites = (state) => {
  try {
    const localStoreFavorites = JSON.stringify({
        ...state,
        favorites: state.favorites
      });
    localStorage.setItem('localStore', localStoreFavorites)
  } catch (e) {
    console.log('saveToLocalStorage - favorites: ', e)
  }
}

store.subscribe(() => saveToLocalStorageFavorites(store.getState()));

const Favorites = (props) => {
  return (
    <PureFavorites props={props}/>
  );
}

const mapStateToProps = state => ({
  books: state.favorites
})

const mapDispatchToProps = dispatch => ({
  setFavoriteBook: book => {
    dispatch(setFavoriteBook(book))
  },
  deleteFavoriteBook: book => {
    dispatch(deleteFavoriteBook(book))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);