import { connect } from 'react-redux';
import App from '../components/App';
import { setBooks } from '../actions/setbooks';
import { Ready } from '../actions/setbooks';

const filter = (books, filterBy) => {
	return books.sort((a, b) => {
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

const mapStateToProps = ({ books }) => ({
	books: filter(books.items, books.filterBy),
	ready: books.isReady,
	filterBy: books.filter
})

const mapDispatchToProps = dispatch => ({
	initBooks: books => dispatch(setBooks(books)),
	isReady: () => dispatch(Ready)
})

export default connect(mapStateToProps, mapDispatchToProps)(App)