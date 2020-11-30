import React from "react";
import {connect} from "react-redux";
import {initBooks} from "../../store/books/booksActions";
import {initBookId} from "../../store/bookId/bookIdActions";
import Sort from "../Sort/Sort";
import {Link} from "react-router-dom";
import BookCard from "../Card/BookCard";
import './Books.css';

const sort = (books, filter) => {
  return [...books].sort((a, b) => {
    switch (filter) {
      case 'price-high':
        return a.price - b.price
      case 'price-low':
        return b.price - a.price
      case 'author':
        return a.author.localeCompare(b.author)
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return books
    }
  })
};

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {

    fetch('http://localhost:3001/books')
        .then(response => response.json())
        .then(data => {
          this.props.initBooks(data);
          this.props.initBookId(data)})
  }

  onChange = (value) => {
    this.setState({value});
  }

  render() {
    const {value} = this.state;
    const {books} = this.props;
    if (!books) {
      return 'Загрузка...';
    }
    const filteredBooks = sort(books, value);
    return (
        <div className="Books">
          <Sort onChange={this.onChange} value={value}/>
          <Link className={"link-favorites"} to={'/favorites'}>
            <button className={"favorites"}>
              Избранное &#128293;
            </button>
          </Link>
          <div className="booksList">
            {filteredBooks.map(item => <BookCard key={item.id} bookCard={item}/>)}
          </div>
        </div>
    );
  }
}

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
