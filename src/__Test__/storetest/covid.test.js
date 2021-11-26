import { covidReducer, selectData } from '../../Redux/covid/covid';

describe('reducer test !', () => {
  test('reducer to returns initial state', () => {
    expect(covidReducer(undefined, {})).toEqual({ countries: {} });
  });
  test('reducer updates  state', () => {
    expect(covidReducer(undefined, selectData('Cameroon'))).toEqual({ countries: {}, currentCountry: 'Cameroon', loading: false });
  });
});
