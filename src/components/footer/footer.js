/* eslint-disable semi */
import React from 'react';
import './footer.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

const Footer = ({ setTicketsLength }) => {
  return (
    <button
      onClick={() => {
        setTicketsLength();
      }}
      className="content__tickets-list button-more"
    >
      ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    ticketsLength: state.ticketsLength,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setTicketsLength } = bindActionCreators(actions, dispatch);

  return {
    setTicketsLength: () => {
      setTicketsLength();
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
