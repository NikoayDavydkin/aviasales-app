/* eslint-disable no-unused-vars */
/* eslint-disable no-inner-declarations */
/* eslint-disable semi */
import React, { useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { v4 as uuidv4 } from 'uuid';

import logo from './img/LogoAvia.png';
import Filters from './components/filters/filters';
import TicketsList from './components/tickets-list/tickets-list';
import TicketsSelection from './components/tickets-selection/tickets-selection';
import Footer from './components/footer/footer';
import Spinner from './components/spinner';
import Info from './components/info';
import * as actions from './actions';

function App({
  filterSelector,
  buttonsSelector,
  searchId,
  setSearchId,
  stop,
  setStop,
  ticketsLength,
  isLoading,
  setIsLoading,
  noFilter,
  setNoFilter,
  tickets,
  setTickets,
  setSortTickets,
}) {
  //function для отправки отсартированных данных

  useEffect(() => {
    if (stop === true) {
      setSortTickets(allSorted(allFilters(assignId(tickets))).slice(0, ticketsLength));
      setIsLoading(false);
    }
  }, [stop, tickets, buttonsSelector, filterSelector, ticketsLength]);

  //function для фильтров

  const allFilters = useCallback(
    (ticketArr) => {
      const newArr = ticketArr.slice();
      return newArr.filter((current) => {
        if (filterSelector[0]) {
          return current;
        }

        if (filterSelector[1] && current.segments[0].stops.length === 0) {
          return current;
        }
        if (filterSelector[2] && current.segments[0].stops.length === 1) {
          return current;
        }

        if (filterSelector[3] && current.segments[0].stops.length === 2) {
          return current;
        }

        if (filterSelector[4] && current.segments[0].stops.length === 3) {
          return current;
        }
      });
    },
    [filterSelector]
  );

  //function для присвоения id

  const assignId = (tickets) => {
    return [...tickets].map((el) => {
      el['id'] = uuidv4();
      return el;
    });
  };

  //function для сортировки

  const allSorted = useCallback(
    (ticketsSort) => {
      if (ticketsSort.length === 0) {
        setNoFilter(true);
      } else {
        setNoFilter(false);
      }
      if (buttonsSelector === 'cheap') {
        return ticketsSort.sort((a, b) => a.price - b.price);
      } else if (buttonsSelector === 'speed') {
        return ticketsSort.sort((a, b) => a.segments[0].duration - b.segments[0].duration);
      } else {
        return ticketsSort;
      }
    },
    [buttonsSelector]
  );

  //function приянтия данных

  useEffect(() => {
    async function getToken() {
      const response = await fetch('https://aviasales-test-api.kata.academy/search');
      if (response.ok) {
        const token = await response.json();
        setSearchId(token.searchId);
      }
    }

    getToken();
  }, []);

  useEffect(() => {
    if (searchId && stop === false) {
      function subscribe() {
        fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
          .then((data) => {
            if (data.status === 500) {
              subscribe();
            } else {
              return data.json();
            }
          })
          .then((ticketsPart) => {
            if (ticketsPart.stop) {
              setStop(true);
            }
            setTickets([...tickets, ...ticketsPart.tickets]);
          })
          .catch((e) => {});
      }
      subscribe();
    }
  }, [searchId, tickets, stop]);

  return (
    <main className="main">
      <img alt="logo" className="logo" src={logo} />
      <div className="content">
        <section className="content__filters-block">
          <Filters hide={'hide'} />
        </section>
        <section className="content__tickets-block">
          <TicketsSelection />
          <div className="filtersSelector">
            <Filters hide={'hide-mobile'} />
          </div>
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : noFilter ? (
            <Info />
          ) : (
            <TicketsList />
          )}
          <Footer />
        </section>
      </div>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    buttonsSelector: state.buttonsSelector,
    filterSelector: state.filterSelector,
    searchId: state.searchId,
    stop: state.stop,
    ticketsLength: state.ticketsLength,
    isLoading: state.isLoading,
    noFilter: state.noFilter,
    tickets: state.tickets,
  };
};

const mapDispatchToProps = (dispatch) => {
  const { setSearchId, setStop, setIsLoading, setNoFilter, setTickets, setSortTickets } = bindActionCreators(
    actions,
    dispatch
  );

  return {
    setSearchId: (value) => {
      setSearchId(value);
    },

    setStop: (value) => {
      setStop(value);
    },

    setIsLoading: (value) => {
      setIsLoading(value);
    },

    setNoFilter: (value) => {
      setNoFilter(value);
    },

    setTickets: (value) => {
      setTickets(value);
    },

    setSortTickets: (value) => {
      setSortTickets(value);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
