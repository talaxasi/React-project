import React from 'react';
import '../styles/App.css';
import BookCard from '../containers/Card'
import Filter from '../containers/Filter'

class App extends React.Component {

  componentDidMount() {
    const initBooks = this.props.initBooks
    const isReady = this.props.isReady

    fetch('/books.json')
      .then(response => response.json())
      .then(data => initBooks(data))
      .then(isReady)
  }

  render() {
    let ready = this.props.ready
    let books = this.props.books
    let filterBy = this.props.filterBy
    return (
      <div className="App">
        <Filter/>
        {!ready
        ? 'Загрузка...'
        : books.map(item => <BookCard key={item.id} {...item} />)}
      </div>
    );
  }
}

export default App;
