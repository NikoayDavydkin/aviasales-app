/* eslint-disable semi */
import React from 'react';
import './tickets-item.scss';

import TicketsItemTr from '../tickets-item-tr/tickets-item-tr';

const TicketsItem = ({ ticket }) => {
  const returnPrice = () => {
    return ticket.price
      .toString()
      .split('')
      .reverse()
      .reduce((argigation, char, i) => {
        if (i % 3 === 0) {
          return argigation + ' ' + char;
        }
        return argigation + char;
      }, 'P')
      .split('')
      .reverse()
      .join('');
  };

  return (
    <div className="content__tickets-item tickets-item">
      <header className="tickets-item__header">
        <span>{returnPrice()}</span>
        <img alt={`logo-${ticket.carrier}`} src={`https:////pics.avs.io/99/36/${ticket.carrier}.png`} />
      </header>

      {ticket.segments.map((item) => {
        return <TicketsItemTr key={ticket.segments.indexOf(item)} segments={item} />;
      })}
    </div>
  );
};

export default TicketsItem;
