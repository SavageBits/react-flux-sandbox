"use strict";

var React = require('react');
var Link = require('react-router').Link;

var NotFoundPage = React.createClass({
    render: function() {
        return (
            <div>
                <h1>404, son</h1>
            </div>
        );
    }
});

module.exports = NotFoundPage;
