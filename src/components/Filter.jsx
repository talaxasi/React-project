import React, { useCallback } from 'react';
import '../styles/filter.css'

export default function Filter({ value, onChange }) {
	return (
		< div className='filter-group' >
			<p>Сортировать по:</p>
			<div className="buttons">
				<button className="button-filter" onClick={() => onChange("price-high")} >
					Цене (возрвствнию)
				</button>
				<button className="button-filter" onClick={() => onChange("price-low")} >
					Цене (убыванию)
				</button>
				<button className="button-filter" name="author" >Автору</button>
				<button className="button-filter" name="title" >Названию</button>
			</div>
		</div >
	);
}
