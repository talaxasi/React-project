import React from 'react';
import '../styles/App.css';
import BookCard from '../containers/Card';
import Filter from '../containers/Filter';

const filter = (books, filterBy) => {
  return [...books].sort((a, b) => {
    switch (filterBy) {
      case 'price-high':
        return a.price - b.price
      case 'price-low':
        return b.price - a.price
      default:
        return books
    }
  })
}

class App extends React.PureComponent {
  componentDidMount() {
    fetch('/books.json')
      .then(response => response.json())
      .then((data) => this.setState({ data }))
  }

  callback = () => {}

  render() {
    let books = this.props.books
    const { value } = this.state;

    if (!data) {
      return '...loading';
    }

    const filteredBooks = filter(data, value);

    return (
      <div className="App">
        <Filter value={value} onChange={(value) => this.setState({ value })} />
        {filteredBooks.map(item => <BookCard key={item.id} book={item} />)}
      </div>
    );
  }
}

export default App;
