import React from "react";
import {connect} from "react-redux";
import PureBooks from "./PureBooks";
import {initBooks} from "../../store/books/booksActions";
import {initBookId} from "../../store/bookId/bookIdActions";

const Books = props => {
  const {books, bookId, initBookId, initBooks} = props;
  return (
    <PureBooks books={books} bookId={bookId} initBooks={initBooks} initBookId={initBookId}/>
  );
};

const mapStateToProps = state => ({
  books: state.books,
  bookId: state.bookId
});

const mapDispatchToProps = dispatch => ({
  initBooks: books => {
    dispatch(initBooks(books));
  },
  initBookId: books => {
    dispatch(initBookId(books));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
