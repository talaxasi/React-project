import {connect} from 'react-redux';
import BookCard from '../components/Card'


const mapStateToProps = ({books}) => ({
	books
})

export default connect(mapStateToProps)(BookCard)