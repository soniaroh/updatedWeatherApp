
import clear from '../weatherIcons/clear.png';
import clouds from '../weatherIcons/clouds.png';
import drizzle from '../weatherIcons/drizzle.png';
import Hail from '../weatherIcons/Hail.png';
import heavyRain from '../weatherIcons/heavyRain.png';
import lightCloud from '../weatherIcons/lightCloud.png';
import showers from '../weatherIcons/showers.png';
import sleet from '../weatherIcons/sleet.png';
import snow from '../weatherIcons/snow.png';
import thunderstorm from '../weatherIcons/thunderstorm.png';

export const getDayName = dateStr => {
  dateStr = dateStr.replace('-', '/');
  let date = new Date(dateStr);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thrusday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

export const weatherState = name => {
  switch(true) {
    case name === 'Heavy Cloud':
    return clouds;

    case name === 'Snow':
    return snow;

    case name === 'Sleet':
    return sleet;

    case name === 'Hail':
    return Hail;

    case name === 'Thunderstorm':
    return thunderstorm;

    case name === 'Heavy Rain':
    return heavyRain;

    case name === 'Light Rain':
    return drizzle;

    case name === 'Showers':
    return showers;

    case name === 'Clear':
    return clear;

    case name === 'Light Cloud':
    return lightCloud;

    default:
    return 'weather state is not valid';
  }
}
