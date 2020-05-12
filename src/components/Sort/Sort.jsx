import React, { useState } from 'react';
import './Sort.css'

export default function Filter(props) {
	const [active, setActive] = useState('')
	const onChange = props.onChange

	const buttons = [
		{ name: 'price-high', value: 'Цене (возрастанию)' },
		{ name: 'price-low', value: 'Цене (убыванию)' },
		{ name: 'author', value: 'Автору' },
		{ name: 'title', value: 'Названию' },
		{ name: 'none', value: 'Сброс фильтра' }
	]

	const setBtnActive = (e) => {
		const that = e.target
		onChange(that.name);
		setActive(that.name)
	}
	// console.log(active)

	return (
		< div className='filter-group' >
			<p>Сортировать по:</p>
			<div className="buttons" onClick={setBtnActive}>
				{buttons.map(btn => (
					<button
						className={active === btn.name ? 'button-filter active' : 'button-filter'}
						name={btn.name}
						key={btn.name} >
						{btn.value}
					</button>
				))}
			</div>
		</div >
	);
}