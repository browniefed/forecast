// Require react-native
var React = require('react-native');
//Assign the variable AppRegistry from React.AppRegistry
var AppRegistry = React.AppRegistry;

//Require our application that is our weather application
var App = require('./app');

//Our Forecast component it just renders our app
var Forecast = React.createClass({
  render: function() {
    return (
      <App />
    )
  }
})

//This is a special thing for React Native. It sends a message to the native world that our base/root component is the Forecast component
AppRegistry.registerComponent('forecast', () => Forecast);
