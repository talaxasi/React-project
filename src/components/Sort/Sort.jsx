import React from 'react';
import './Sort.css';
import { buttons } from './buttons';

export default function Filter(props) {
	const { value } = props;
	const { onChange } = props;

	const setBtnActive = e => {
		const btn = e.target.closest('button');
		if(btn) onChange(e.target.name);
	};

	return (
		< div className='filter-group' >
			<p>Сортировать по:</p>
			<div className="buttons" onClick={setBtnActive}>
				{buttons.map(btn => (
					<button
						className={value === btn.value
							? 'button-filter active'
							: 'button-filter'}
						name={btn.value}
						key={btn.value} >
						{btn.title}
					</button>
				))}
			</div>
		</div >
	);
}