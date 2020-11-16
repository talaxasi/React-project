import {INIT_BOOK_ID} from "./bookIdActions";

const initialState = {};

const bookIdReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BOOK_ID:
    let bookId = {};
    action.payload.forEach(item => bookId[item.id] = item);
    return bookId;
  };
  return state;
};

export default bookIdReducer;