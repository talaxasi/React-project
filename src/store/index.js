import {combineReducers, createStore} from "redux";
import favoritesReducer from "./favorites/favoritesReducer";
import booksReducer from "./books/booksReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  books: booksReducer
});

const loadFromLocalSrorage = () => {
  try{
    const locStore = localStorage.getItem('localStore');
    if(!locStore) return undefined;
    return JSON.parse(locStore)
  }catch (e) {
    console.log('loadFromLocalStorage', e)
  }
}

const persistedState = loadFromLocalSrorage();

const store = createStore(rootReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export  default  store;