/*eslint-disable strict */ //disabling because we need global jQuery for bootstrap

var React = require('react');
var Header = require('./common/header');
var RouteHandler = require('react-router').RouteHandler;
$ = jQuery = require('jquery'); //because bootstrap expects jquery to exist globally

var App = React.createClass({
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <RouteHandler/>
                </div>
            </div>
        );
    }
});

module.exports = App;
