$ = jQuery = require('jquery'); //because bootstrap expects jquery to exist globally
var React = require('react');
var Home = require('./components/homePage');
var Header = require('./components/common/header');

React.render(<div><Header/><Home/></div>, document.getElementById('app'));

// var App = console.log('hello worlds from browersify');
//
// module.exports = App;
