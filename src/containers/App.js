import { connect } from 'react-redux';
import App from '../components/App';
import { setBooks } from '../actions/setbooks';

const mapStateToProps = ({ books }) => ({
	books: books.items,
})

const mapDispatchToProps = dispatch => ({
	initBooks: books => dispatch(setBooks(books)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
