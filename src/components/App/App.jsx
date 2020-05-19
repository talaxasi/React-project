import React from 'react';
import './AppPure.css';
import BookCard from '../Card/Card'
import Sort from '../Sort/Sort'

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
}


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      value: ''
    };
  }

  componentDidMount() {

    fetch('/books.json')
      .then(response => response.json())
      .then(data => this.setState({books: data}))
  }

  onChange = (value) => {
    this.setState({ value });
  }

  render() {
      const { value, books } = this.state;
      let filteredBooks;
    if (books) filteredBooks = sort(books, value);
    return (
      <div className="App">
        <Sort onChange={this.onChange} value={value}/>
        {filteredBooks.map(item => <BookCard key={item.id} book={item} />)}
      </div>
    );
  }
}

export default App;
