"use strict";

var React = require('react');

//for linking to existing routes
var Router = require('react-router');
var Link = Router.Link;

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <a href="/" className="navbar-brand">
                        Logo time
                    </a>
                    <ul className="nav navbar-nav">
                        <li><Link to="app">Home</Link></li>
                        <li><Link to="about">About</Link></li>
                        <li><Link to="tasks">Tasks</Link></li>
                    </ul>
                </div>
            </nav>
        );
    }
});

module.exports = Header;
