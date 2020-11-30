import {SET_FAVORITE_BOOK, DELETE_FAVORITE_BOOK} from "./favoritesActions";

const initialState = [];

const saveToLocalStorageFavorites = state => {
  try {
    const jsonState = JSON.stringify(state);
    localStorage.setItem('favorites', jsonState)
  } catch (e){
    console.log('localStorage - favorites', e)
  }
}

const loadLocalStoreFavorites = key => {
  try {
    const favorites = localStorage.getItem(key);
    const localStorageFavorites = JSON.parse(favorites);
    return localStorageFavorites;
  } catch (e) {
    console.log('loadLocalStoreFavorites', e)
  }
}

const favoritesReducer = (state = loadLocalStoreFavorites('favorites') || [], action) => {
  switch (action.type) {
    case SET_FAVORITE_BOOK:
      const setFavoriteBook = [
        ...state,
        action.payload.id
      ];
      saveToLocalStorageFavorites(setFavoriteBook);
      return setFavoriteBook;

    case DELETE_FAVORITE_BOOK:
      const delFavoriteBook = state.filter(book => book !== action.payload.id);
      saveToLocalStorageFavorites(delFavoriteBook);
      return delFavoriteBook;
  }
  return state;
};

export default  favoritesReducer;