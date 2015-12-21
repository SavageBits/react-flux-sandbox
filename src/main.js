"use strict";

var React = require('react');
var Router = require('react-router');
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

//optionally if you want to use html5 history location instead of hash locations:
// Router.run(routes, Router.HistoryLocation, function(Handler) {

InitializeActions.initApp();

Router.run(routes, function(Handler) {
    React.render(<Handler/>, document.getElementById('app'));
});
