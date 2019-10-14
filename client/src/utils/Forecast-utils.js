export const getDayName = dateStr => {
  dateStr = dateStr.replace('-', '/')
  let date = new Date(dateStr);
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thrusday', 'Friday', 'Saturday'];
  return days[date.getDay()]
}

export const weatherState = name => {
  if (name === 'Heavy Cloud') return require('../weatherIcons/clouds.png')
  if (name === 'Snow') return require('../weatherIcons/snow.png')
  if (name === 'Sleet') return require('../weatherIcons/sleet.png')
  if (name === 'Hail') return require('../weatherIcons/Hail.png')
  if (name === 'Thunderstorm') return require('../weatherIcons/thunderstorm.png')
  if (name === 'Heavy Rain') return require('../weatherIcons/heavy_rain.png')
  if (name === 'Light Rain') return require('../weatherIcons/drizzle.png')
  if (name === 'Showers') return require('../weatherIcons/showers.png')
  if (name === 'Clear') return require('../weatherIcons/clear.png')
  if (name === 'Light Cloud') return require('../weatherIcons/light-cloud.png')  
}