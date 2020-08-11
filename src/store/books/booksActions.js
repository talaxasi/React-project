export const INIT_BOOKS = "INIT_BOOKS";

export const initBooks = books => ({
  type: INIT_BOOKS,
  payload: books
});