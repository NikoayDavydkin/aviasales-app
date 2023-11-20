/* eslint-disable semi */
import React from 'react';
import './tickets-selection.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

const TicketsSelection = ({ setButtonsSelector, buttonsSelector }) => {
  const returnClass = (value) => {
    if (buttonsSelector === value) {
      return 'button-active';
    }

    return '';
  };

  return (
    <ul className="content__tickets-selection tickets-selection">
      <li>
        <button
          onClick={() => {
            setButtonsSelector('cheap');
          }}
          className={`tickets-selection-button-one ${returnClass('cheap')}`}
        >
          САМЫЙ ДЕШЕВЫЙ
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setButtonsSelector('speed');
          }}
          className={`tickets-selection-button-one ${returnClass('speed')}`}
        >
          САМЫЙ БЫСТРЫЙ
        </button>
      </li>
      <li>
        <button
          onClick={() => {
            setButtonsSelector('optimal');
          }}
          className={`tickets-selection-button-one ${returnClass('optimal')}`}
        >
          ОПТИМАЛЬНЫЙ
        </button>
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    buttonsSelector: state.buttonsSelector,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setButtonsSelector } = bindActionCreators(actions, dispatch);

  return {
    setButtonsSelector: (value) => {
      setButtonsSelector(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TicketsSelection);
