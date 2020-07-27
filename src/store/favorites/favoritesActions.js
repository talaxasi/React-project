export const SET_FAVORITE_BOOK = "SET_FAVORITE_BOOK";
export const DELETE_FAVORITE_BOOK = "DELETE_FAVORITE_BOOK";

export const setFavoriteBook = book => ({
  type: SET_FAVORITE_BOOK,
  payload: book
});

export const deleteFavoriteBook = book => ({
  type: DELETE_FAVORITE_BOOK,
  payload: book
});