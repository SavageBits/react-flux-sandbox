"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');

//optionally if you want to use html5 history location instead of hash locations:
// Router.run(routes, Router.HistoryLocation, function(Handler) {

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
