$ = jQuery = require('jquery'); //because bootstrap expects jquery to exist globally
var React = require('react');
var Home = require('./components/homePage');
var Tasks = require('./components/tasks/taskPage');
var Header = require('./components/common/header');

React.render(<div className="container"><Header/><Home/><Tasks/></div>, document.getElementById('app'));

// var App = console.log('hello worlds from browersify');
//
// module.exports = App;
