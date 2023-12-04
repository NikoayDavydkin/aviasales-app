/* eslint-disable semi */
import React from 'react';
import './filters.scss';
import { v4 as uuidv4 } from 'uuid';

import FiltersItem from '../filters-item/filters-item';

const Filters = ({ hide }) => {
  const classes = ['filters'];
  const filterValue = [
    {
      value: 'Все',
      id: uuidv4(),
    },
    {
      value: 'Без пересадок',
      id: uuidv4(),
    },
    {
      value: '1 пересадка',
      id: uuidv4(),
    },
    {
      value: '2 пересадки',
      id: uuidv4(),
    },
    {
      value: '3 пересадки',
      id: uuidv4(),
    },
  ];

  classes.push(hide);

  let index = 0;

  return (
    <ul className={classes.join(' ')}>
      <li className="filters__name">КОЛИЧЕСТВО ПЕРЕСАДОК</li>
      {filterValue.map((value) => {
        index += 1;
        return (
          <li key={value.id} className="filters__item">
            <FiltersItem index={index} value={value.value} />
          </li>
        );
      })}
    </ul>
  );
};

export default Filters;
