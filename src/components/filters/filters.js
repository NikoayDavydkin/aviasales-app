/* eslint-disable semi */
import React from 'react';
import './filters.scss';
import { v4 as uuidv4 } from 'uuid';

import FiltersItem from '../filters-item/filters-item';

const Filters = ({ hide }) => {
  const classes = ['filters'];
  const filterValue = ['Все', 'Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

  classes.push(hide);

  let index = 0;

  return (
    <ul className={classes.join(' ')}>
      <li className="filters__name">КОЛИЧЕСТВО ПЕРЕСАДОК</li>
      {filterValue.map((value) => {
        index += 1;
        return <FiltersItem index={index} value={value} key={uuidv4()} />;
      })}
    </ul>
  );
};

export default Filters;
