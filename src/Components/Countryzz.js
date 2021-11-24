import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FaVirus } from 'react-icons/fa';
import Country from './Country';
import Query from './Search';
import '../sectionStyles/countryzz.css';

const Countryzz = ({
  countries, total, loading, handleClick,
}) => {
  const [filtered, setFiltered] = useState(Object.keys(countries));

  const filterCountries = (expression) => Object.keys(countries).filter((country) => {
    const regex = new RegExp(expression, 'gi');
    return country.match(regex);
  });

  const handleChange = (event) => setFiltered(filterCountries(event.target.value));

  useEffect(() => {
    setFiltered(Object.keys(countries));
  }, [countries]);

  return (
    <div>
      <div className="header-wrapper">
        <div className="world-header">
          <img className="world-map" src="/worldmap.svg" alt="world map" />
        </div>
        <div className="world-info">
          <span className="world-cases">Roughly </span>
          <span className="world-cases-value">
            {' '}
            {total && Intl.NumberFormat('de-DE').format(total.today_confirmed) }
          </span>
          <span className="world-cases">Covid world Cases </span>
          <FaVirus className="icon-virus" />

        </div>

      </div>

      <Query handleChange={handleChange} />

      <ul className="countries-list">
        { filtered && filtered.map((key) => (
          (key !== 'pistolet')
              && (
              <li key={key} className="countries">
                <Country
                  country={key}
                  totalConfirmed={countries[key].today_confirmed}
                  handleClick={handleClick}
                />
              </li>
              )
        ))}
      </ul>
      {!filterCountries.length && !loading && (
      <span>
        Sorry, Check the spelling again !
        {' '}
        <FaVirus className="virus" />
        {' '}
      </span>
      )}
    </div>
  );
};

Countryzz.defaultProps = {
  loading: true,
  total: {},
};

Countryzz.propTypes = {
  countries: PropTypes.objectOf(PropTypes.object).isRequired,
  total: PropTypes.shape({
    today_confirmed: PropTypes.number,
  }),
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool,

};

export default Countryzz;
