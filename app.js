//Require the react-native library
var React = require('react-native');
var getImage = require('./getImage');
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
  Image,
  StyleSheet
} = React;

//Add your api key
var API_KEY = '691852a7af8ca10f821920a370e069fb';

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
    //If we are loading then return some a full page view (flex: 1), that centers its children (the Text).
    if (this.state.loading) {
      return (
        <View style={[styles.container, styles.center]}>
          <Text>Loading...</Text>
        </View>
      )
    }

    //When loading is false we will just render our data because we have it now
    //Images need to have a defined width/height on them, there are some other special things we can do to not require that but for now lets just give it a width/height
    //You'll notice the `{}`. This tells React to evaluate it as JavaScript code versus text.
    //So you can see Temperature: {this.state.temperature}°. It will output the word "Temperature" but then get the value we set from the API right next to it.
    //Temperature: 42.2°
    return (
      <View style={styles.container}>
        <Image source={getImage(this.state.icon)} style={{width: 50, height: 50}} />
        <Text>{this.state.summary}</Text>
        <Text>Temperature: {this.state.temperature}°</Text>
        <Text>Humidity: {this.state.humidity}</Text>
        <Text>Wind Speed: {this.state.windSpeed}</Text>
      </View>
    )
  }
})

//This creates our StyleSheet, it's just like writing normal css... sort of
var styles = StyleSheet.create({
  //A containe, we set flex: 1 which means "take up all available space". Because we are rendering this at the root it takes up the entire screen.
  container: {
    flex: 1,
    backgroundColor: '#4defd2' // we set the background color to a blue green
  },
  //This tells react to center all content horizontally, and vertically. Basically putting the thing in the middle of the screen.
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  }
})

//Export our component so that other things can use it.
module.exports = App;
