function getImage(icon) {
  switch (icon) {
    case 'clear_day':
      return require('./images/clear_day.png');
    case 'clear_night':
      return require('./images/clear_night.png');
    case 'cloudy_night':
      return require('./images/cloudy_night.png');
    case 'cloudy':
      return require('./images/cloudy.png');
    case 'degree':
      return require('./images/degree.png');
    case 'fog':
      return require('./images/fog.png');
    case 'ic_launcher':
      return require('./images/ic_launcher.png');
    case 'partly_cloudy':
    case 'partly-cloudy-night':
    case 'partly-cloudy-day':
      return require('./images/partly_cloudy.png');
    case 'rain':
      return require('./images/rain.png');
    case 'refresh':
      return require('./images/refresh.png');
    case 'sleet':
      return require('./images/sleet.png');
    case 'snow':
      return require('./images/snow.png');
    case 'sunny':
      return require('./images/sunny.png');
    case 'wind':
      return require('./images/wind.png');
  }
}


module.exports = getImage;
