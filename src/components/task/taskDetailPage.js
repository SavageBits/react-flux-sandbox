"use strict";

var React = require('react');

var Task = React.createClass({
    render: function() {
        return (
            <div>
                <h1>Task detail for id {this.props.params.taskId}</h1>
                <hr/>
                Can also retrieve query params using this.props.query.[queryStringParamName]
                <hr/>
                {this.props.path}
            </div>
        );
    }
});

module.exports = Task;
