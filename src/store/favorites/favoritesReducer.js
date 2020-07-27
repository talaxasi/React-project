import {SET_FAVORITE_BOOK, DELETE_FAVORITE_BOOK} from "./favoritesActions";

const initialState = [];

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE_BOOK:
      return [
        ...state,
        action.payload
      ];
    case DELETE_FAVORITE_BOOK:
      return state.filter(book => book.id !== action.payload.id);
  }
  return state;
};

export default  favoritesReducer;