"use strict";

var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

var routes = (
    <Route name="app" path="/" hander={require('./components/app')}>
        <DefaultRoute handler={require('./components/homePage')} />
        <Route name="about" handler={require('./components/about/aboutPage')} />
        <Route name="tasks" handler={require('./components/tasks/taskPage')} />
    </Route>
)

module.exports = routes;
