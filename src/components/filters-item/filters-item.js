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
    <li
      onClick={() => {
        onFilter();
      }}
      className="filters__item"
    >
      <input checked={filterSelector[index - 1]} readOnly={true} type="checkbox" className="custom-checkbox" />
      <label>{value}</label>
    </li>
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
