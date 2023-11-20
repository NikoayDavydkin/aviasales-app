/* eslint-disable semi */
import newDate from 'new-date';
import React from 'react';

const TicketsItemTr = ({ segments }) => {
  const returnTime = (t) => {
    const time = newDate(segments.date);

    const ch = Math.ceil(segments.duration / 60);
    const min = segments.duration % 60;

    const startCh = time.getHours();
    const startMin = time.getMinutes();
    const stopCh = newDate(time.setHours(startCh + ch)).getHours();
    const stopMin = newDate(time.setMinutes(startMin + segments.duration)).getMinutes();

    if (t === 'date') {
      return `${startCh < 10 ? '0' + startCh : startCh}:${startMin < 10 ? '0' + startMin : startMin}-${
        stopCh < 10 ? '0' + stopCh : stopCh
      }:${stopMin < 10 ? '0' + stopMin : stopMin}`;
    } else {
      return `${ch}ч ${min}м`;
    }
  };

  const returnEnding = () => {
    let ending = '';

    if (segments.stops.length === 1) {
      ending = 'КА';
    } else if (segments.stops.length === 2 || segments.stops.length === 3 || segments.stops.length === 4) {
      ending = 'КИ';
    } else {
      ending = 'ОК';
    }

    return ending;
  };

  return (
    <div className="tickets-item__tr ">
      <div className="tickets-item__route">
        <span className="tickets-item__route-name">
          {segments.origin}-{segments.destination}
        </span>
        <span className="tickets-item__route-text">{returnTime('date')}</span>
      </div>
      <div className="tickets-item__route">
        <span className="tickets-item__route-name">В ПУТИ</span>
        <span className="tickets-item__route-text">{returnTime('duration')}</span>
      </div>
      <div className="tickets-item__route">
        <span className="tickets-item__route-name">
          {segments.stops.length ? segments.stops.length : 'БЕЗ'} {`ПЕРЕСАД${returnEnding()}`}
        </span>
        <span className="tickets-item__route-text">{segments.stops.join(', ')}</span>
      </div>
    </div>
  );
};

export default TicketsItemTr;
