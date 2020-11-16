import React from 'react';
import './Sort.scss';

const buttons = [
  {value: 'price-high', title: 'Цене (возрастанию)'},
  {value: 'price-low', title: 'Цене (убыванию)'},
  {value: 'author', title: 'Автору'},
  {value: 'title', title: 'Названию'},
  {value: 'none', title: 'Сброс фильтра'}
]

export default function Filter(props) {
  const {value} = props;
  const {onChange} = props;

  return (
    < div className='filter-group'>
      <p>Сортировать по:</p>
      <div className="buttons-favorite">
        {buttons.map(btn => (
          <button
            className={value === btn.value
              ? 'button-filter active'
              : 'button-filter'}
            name={btn.value}
            onClick={e => {
              onChange(e.target.name);
            }}
            key={btn.title}>
            {btn.title}
          </button>
        ))}
      </div>
    </div>
  );
}