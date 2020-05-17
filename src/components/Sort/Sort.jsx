import React from 'react';
import './Sort.css';
import { buttons } from './buttons';

export default function Filter(props) {
	const { value } = props;
	const { onChange } = props;

	const setBtnActive = e => {
		onChange(e.target.name);
	};

	return (
		< div className='filter-group' >
			<p>Сортировать по:</p>
			<div className="buttons">
				{buttons.map(btn => (
					<button
						className={value === btn.value
							? 'button-filter active'
							: 'button-filter'}
						name={btn.value}
						onClick={setBtnActive}
						key={btn.title} >
						{btn.title}
					</button>
				))}
			</div>
		</div >
	);
}