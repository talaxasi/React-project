import React from 'react';
import '../styles/filter.css'
import { setFilter } from '../actions/setfilter';

export default function Filter(props) {
	let books = props.books
	const filterBooks = props.filterBooks

	return (
		< div className='filter-group' >
			<p>Сортировать по:</p>
			<div className="buttons">
				<button className="button-filter" onClick={filterBooks.bind(null, 'price-high')} >
					Цене (возрвствнию)
				</button>
				<button className="button-filter" onClick={filterBooks.bind(null, 'price-low')} >
					Цене (убыванию)
				</button>
				<button className="button-filter" name="author" >Автору</button>
				<button className="button-filter" name="title" >Названию</button>
			</div>
		</div >
	);
}