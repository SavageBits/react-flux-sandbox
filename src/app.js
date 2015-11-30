$ = jQuery = require('jquery'); //because bootstrap expects jquery to exist globally
var React = require('react');
var Home = require('./components/homePage');

React.render(<Home />, document.getElementById('app'));

// var App = console.log('hello worlds from browersify');
//
// module.exports = App;
