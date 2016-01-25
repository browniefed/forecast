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

//Create our application component
var App = React.createClass({
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
