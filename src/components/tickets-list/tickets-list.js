/* eslint-disable semi */
import React from 'react';
import './tickets-list.scss';
import { v4 as uuidv4 } from 'uuid';
import { connect } from 'react-redux';

import TicketsItem from '../tickets-item/tickets-item';

const TicketsList = ({ sortTickets }) => {
  return (
    <ul className="content__tickets-list tickets-list">
      {sortTickets.map((item) => {
        return (
          <li key={uuidv4()}>
            {' '}
            <TicketsItem ticket={item} />{' '}
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    sortTickets: state.sortTickets,
  };
};

export default connect(mapStateToProps)(TicketsList);
