"use strict";

var React = require('react');

var Task = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Task detail for id {this.props.taskId}</h1>
            </div>
        );
    }
});

module.exports = Task;
