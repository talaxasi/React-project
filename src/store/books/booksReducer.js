import {INIT_BOOKS} from "./booksActions";

const initialState = [];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOOKS:
      let newBooks = action.payload.filter(newBook => !state.some(stateBook => newBook.id === stateBook.id))
      return [
        ...state,
        ...newBooks
      ];
  };
  return state
};

export default booksReducer;


// let books = {};
// action.payload.map(item => books[item.id] = item);