import {INIT_BOOKS} from "./booksActions";

const initialState = {};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOOKS:
      let books = {};
      action.payload.map(item => books[item.id] = item);
      return books
  };
  return state
};

export default booksReducer;


// let books = {};
// action.payload.map(item => books[item.id] = item);