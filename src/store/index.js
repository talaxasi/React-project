import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import reduxThunk from 'redux-thunk';

import favoritesReducer from "./favorites/favoritesReducer";
import booksReducer from "./books/booksReducer";
import bookIdReducer from "./bookId/bookIdReducer";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  books: booksReducer,
  bookId: bookIdReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(
      reduxThunk
    )
  )
);

export  default  store;