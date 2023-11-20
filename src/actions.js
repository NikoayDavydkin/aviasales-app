/* eslint-disable semi */

export const setButtonsSelector = (value) => {
  return {
    type: 'BUTTONS_SELECTOR',
    value: value,
  };
};

export const setFilterSelector = (value) => {
  return {
    type: 'FILTER_SELECTOR',
    value: value,
  };
};

export const setSearchId = (value) => {
  return {
    type: 'SEARCH_ID',
    value: value,
  };
};

export const setStop = (value) => {
  return {
    type: 'STOP',
    value: value,
  };
};

export const setTicketsLength = (value) => {
  return {
    type: 'TICKETS_LENGTH',
    value: value,
  };
};

export const setIsLoading = (value) => {
  return {
    type: 'IS_LOADING',
    value: value,
  };
};

export const setNoFilter = (value) => {
  return {
    type: 'NO_FILTER',
    value: value,
  };
};

export const setTickets = (value) => {
  return {
    type: 'TICKETS',
    value: value,
  };
};

export const setSortTickets = (value) => {
  return {
    type: 'SORT_TICKETS',
    value: value,
  };
};
