import {
  getDayName,
  weatherState
} from '../utils/Forecast-utils';

describe('getDayName',() => {
  it('should return the day name', () => {
    expect(getDayName('2019-10-13')).toEqual('Sunday')
  });
});

describe('weatherState', () => {
  it('should return path to proper image according to the weather state', () => {
    expect(weatherState('Heavy Cloud')).toEqual('../weatherIcons/clouds.png')
  });
});