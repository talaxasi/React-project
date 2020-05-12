import React from 'react';
import './AppPure.css';
import BookCard from '../Card/Card'
import Sort from '../Sort/Sort'

const sort = (books, filter) => {
  return [...books].sort((a, b) => {
    switch (filter) {
      case 'price-high':
        return b.price - a.price
      case 'price-low':
        return a.price - b.price
      case 'author':
        return a.author.localeCompare(b.author)
      case 'title':
        return a.title.localeCompare(b.title)
      default:
        return books
    }
  })
}


class App extends React.Component {

  componentDidMount() {
    const initBooks = this.props.initBooks

    fetch('/books.json')
      .then(response => response.json())
      .then(data => initBooks(data))
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
    let books = this.props.books
    let filteredBooks
    const { value } = this.state || '';
    if (!books) {
      return 'Загрузка'
    } else filteredBooks = sort(books, value)
    return (
      <div className="App">
        <Sort onChange={this.onChange} />
        {!books
          ? 'Загрузка...'
          : filteredBooks.map(item => <BookCard key={item.id} book={item} />)}
      </div>
    );
  }
}

export default App;
