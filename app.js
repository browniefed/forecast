//Require the react-native library
var React = require('react-native');

//This is called destructuring in ES2015 for JavaScript.
//Equivalent code would be
/*
var View = React.View;
var Text = React.Text;
var StyleSheet = React.StyleSheet
*/
let {
  View,
  Text,
  StyleSheet
} = React;

//Add your api key
var API_KEY = '';

//Create our application component
var App = React.createClass({
  //This defines the initial "state" of the application
  //State is the stuff that changes in our application.
  //Before we ask forecast.io for data we initialize our application with empty data, and tell it that we are loading
  //This object that we return will be able to be accessed on `this.state`
  getInitialState: function() {
    return {
      temperature: null,
      humidity: null,
      windSpeed: null,
      icon: null,
      summary: '',
      loading: true
    }
  },
  componentWillMount: function() {
    //React native polyfills the fetch api from the web. It actually sends this to the ObjC/Java world and runs the ajax request natively.
    //When we get our response back ( the first .then ) we tell it to return our response converted to json
    //Then we go to our next .then. Because we converted our response to json that means we can access it as an object
    fetch('https://api.forecast.io/forecast/' + API_KEY + '/45.523220,-122.668752')
      .then(res => res.json())
      //this.setState is our method of telling react that we changed something and it needs to re-render our application and figure out what changed
      .then(resJson => this.setState({
        temperature: resJson.currently.temperature,
        humidity: resJson.currently.humidity,
        windSpeed: resJson.currently.windSpeed,
        icon: resJson.currently.icon,
        summary: resJson.currently.summary,
        //We are officially loaded so now we set our loading flag to false
        loading: false
      }))
  },
  //This is the render function. Every react class you create must have a render function that returns one component only
  render: function() {
    return (
      <View>
        <Text>The weather outside is weather</Text>
      </View>
    )
  }
})

//Export our component so that other things can use it.
module.exports = App;
