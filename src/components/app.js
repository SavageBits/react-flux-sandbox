/*eslint-disable strict */ //disabling because we need global jQuery for bootstrap

$ = jQuery = require('jquery'); //because bootstrap expects jquery to exist globally
var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;

var App = React.createClass({
    render: function() {
        return (
            <div className="container">
                <Header/>
                <RouteHandler/>
            </div>
        )
    }
});

module.exports = App;
