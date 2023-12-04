/* eslint-disable semi */
import React from 'react';
import './tickets-selection.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

const TicketsSelection = ({ setButtonsSelector, buttonsSelector }) => {
  const returnRadio = (value) => {
    return buttonsSelector === value;
  };
  return (
    <div className="but-selection">
      <label>
        <input checked={returnRadio('cheap')} name="sort" type="radio" className="tickets-selection__hide" />
        <div
          onClick={() => {
            setButtonsSelector('cheap');
          }}
          className="tickets-selection__custom radio-one"
        >
          САМЫЙ ДЕШЕВЫЙ
        </div>
      </label>
      <label>
        <input checked={returnRadio('speed')} name="sort" type="radio" className="tickets-selection__hide" />
        <div
          onClick={() => {
            setButtonsSelector('speed');
          }}
          className="tickets-selection__custom radio-two"
        >
          САМЫЙ БЫСТРЫЙ
        </div>
      </label>
      <label>
        <input checked={returnRadio('optimal')} name="sort" type="radio" className="tickets-selection__hide" />
        <div
          onClick={() => {
            setButtonsSelector('optimal');
          }}
          className="tickets-selection__custom radio-three"
        >
          ОПТИМАЛЬНЫЙ
        </div>
      </label>
    </div>
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
