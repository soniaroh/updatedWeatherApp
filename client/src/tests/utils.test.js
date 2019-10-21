import clouds from '../weatherIcons/clouds.png';
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
  it('should return proper image according to the weather state', () => {
    expect(weatherState('Heavy Cloud')).toEqual(clouds)
  });

  it('should return the default message if weather state doesnt exist', () => {
    expect(weatherState('good weather')).toEqual('weather state is not valid')
  });
});