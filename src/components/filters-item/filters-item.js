/* eslint-disable semi */
import React from 'react';
import './filters-item.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from '../../actions';

const FiltersItem = ({ value, index, setFilterSelector, filterSelector }) => {
  const onFilter = () => {
    setFilterSelector(index);
  };

  return (
    <label
      onClick={() => {
        onFilter();
      }}
    >
      <input checked={filterSelector[index - 1]} readOnly={true} type="checkbox" className="checkbox__input" />
      <span className="checkbox__custom"></span>
      {value}
    </label>
  );
};

const mapStateToProps = (state) => {
  return {
    filterSelector: state.filterSelector,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setFilterSelector } = bindActionCreators(actions, dispatch);

  return {
    setFilterSelector: (value) => {
      setFilterSelector(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersItem);
