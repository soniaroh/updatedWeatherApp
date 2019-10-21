
export const getDayName = dateStr => {
  dateStr = dateStr.replace('-', '/');
  let date = new Date(dateStr);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thrusday', 'Friday', 'Saturday'];
  return days[date.getDay()];
}

export const weatherState = name => {
  switch(true) {
    case name === 'Heavy Cloud':
    return require('../weatherIcons/clouds.png');

    case name === 'Snow':
    return require('../weatherIcons/snow.png');

    case name === 'Sleet':
    return require('../weatherIcons/sleet.png');

    case name === 'Hail':
    return require('../weatherIcons/Hail.png');

    case name === 'Thunderstorm':
    return require('../weatherIcons/thunderstorm.png');

    case name === 'Heavy Rain':
    return require('../weatherIcons/heavy_rain.png');

    case name === 'Light Rain':
    return require('../weatherIcons/drizzle.png');

    case name === 'Showers':
    return require('../weatherIcons/showers.png');

    case name === 'Clear':
    return require('../weatherIcons/clear.png');

    case name === 'Light Cloud':
    return require('../weatherIcons/light-cloud.png');

    default:
    console.log('weather state is not valid');
  }
}
