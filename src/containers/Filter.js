import { connect } from 'react-redux';
import Filter from '../components/Filter';
import { setFilter } from '../actions/setfilter';


const mapStateToProps = ({ books }) => ({
  books: books.items,
})

const mapDispatchToProps = dispatch => ({
  filterBooks:  filterType => dispatch(setFilter(filterType))
})


export default connect(mapStateToProps, mapDispatchToProps)(Filter)