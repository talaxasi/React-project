import React from "react";
import {connect} from "react-redux";
import PureBooks from "./PureBooks";
import {initBooks} from "../../store/books/booksActions";

const Books = props => {
  const {books, initBooks} = props;
  return (
    <PureBooks books={books} initBooks={initBooks} />
  );
};

const mapStateToProps = state => ({
  books: state.books
});

const mapDispatchToProps = dispatch => ({
  initBooks: books => {
    dispatch(initBooks(books));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
