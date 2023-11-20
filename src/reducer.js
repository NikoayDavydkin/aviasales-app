/* eslint-disable indent */
/* eslint-disable semi */

export const reducer = (
  state = {
    buttonsSelector: 'cheap',
    filterSelector: [true, true, true, true, true],
    searchId: '',
    stop: false,
    ticketsLength: 5,
    isLoading: true,
    noFilter: false,
    tickets: [],
    sortTickets: [],
  },
  actions
) => {
  switch (actions.type) {
    case 'BUTTONS_SELECTOR':
      return { ...state, buttonsSelector: actions.value };
    case 'FILTER_SELECTOR':
      return {
        ...state,
        filterSelector: filterSelectorFunction(actions.value, state.filterSelector),
      };
    case 'SEARCH_ID':
      return { ...state, searchId: actions.value };
    case 'STOP':
      return { ...state, stop: actions.value };
    case 'TICKETS_LENGTH':
      return { ...state, ticketsLength: state.ticketsLength + 5 };
    case 'IS_LOADING':
      return { ...state, isLoading: actions.value };
    case 'NO_FILTER':
      return { ...state, noFilter: actions.value };
    case 'TICKETS':
      return { ...state, tickets: actions.value };
    case 'SORT_TICKETS':
      return { ...state, sortTickets: actions.value };
    default:
      return state;
  }
};

const filterSelectorFunction = (indexFilt, filterSelector) => {
  let newMass = filterSelector.slice();

  if (indexFilt === 1) {
    if (newMass[indexFilt - 1]) {
      return [false, false, false, false, false];
    } else {
      return [true, true, true, true, true];
    }
  }

  newMass[indexFilt - 1] = !newMass[indexFilt - 1];

  if (newMass[1] && newMass[2] && newMass[3] && newMass[4]) {
    newMass[0] = true;
  }

  if (!newMass[1] || !newMass[2] || !newMass[3] || !newMass[4]) {
    newMass[0] = false;
  }
  return newMass;
};
