import React from 'react';
import renderer from 'react-test-renderer';
import Countries from '../../Components/Countryzz';

const mockedData = {
  Cameroon: {
    new_cases: 604,
    death: 21,
    today_confirmed: 106794,
  },
  Benin: {
    new_cases: 4,
    death: 0,
    today_confirmed: 24850,
  },
};

const mockedTotalCases = {
  today_confirmed: 33868,
  today_new_confirmed: 6753375,
  today_deaths: 575238,
};

describe('Countries', () => {
  it('renders ! ', () => {
    const tree = renderer
      .create(
        <Countries
          countries={mockedData}
          total={mockedTotalCases}
          loading={false}
          handleClick={() => 7 + 5}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
