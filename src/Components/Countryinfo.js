import React, { useEffect } from 'react';
import { FaVirus } from 'react-icons/fa';
import { BiChevronRightCircle } from 'react-icons/bi';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { dataLoading } from '../redux/covid/covid';
// import '../styles/countryInfo.css';

const CountryInfo = ({ current, image }) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.covidReducer.loading);
  const country = useSelector((state) => state.covidReducer.countries[current]);
  const total = country.today_confirmed;

  const listt = [
    {
      id: 1,
      text: 'Confirmed daily cases',
      value: country.today_new_confirmed,
      url: 'newDailyCases',
      category: 'today_new_confirmed',
    },
    {
      id: 2,
      text: 'Confirmed daily deaths',
      value: country.today_new_deaths,
      url: 'newDailyDeaths',
      category: 'today_new_deaths',
    },
    {
      id: 3,
      text: 'Confirmed daily Recovered',
      value: country.today_new_recovered,
      url: 'newDailyRecovered',
      category: 'today_new_recovered',
    },
    {
      id: 4,
      text: 'Confirmed number of Cases',
      value: country.today_confirmed,
      url: 'confirmedCases',
      category: 'today_confirmed',
    },
    {
      id: 5,
      text: 'Confirmed number of Death',
      value: country.today_deaths,
      url: 'confirmedDeaths',
      category: 'today_deaths',
    },
    {
      id: 6,
      text: 'Confirmed recoveries',
      value: country.today_recovered,
      url: 'confirmedRecoveries',
      category: 'today_recovered',
    },

  ];

  useEffect(() => {
    dispatch(dataLoading());
  }, [dispatch]);

  