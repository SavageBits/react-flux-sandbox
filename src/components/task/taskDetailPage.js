"use strict";

var React = require('react');
var TaskApi = require('../../api/taskApi');

var Task = React.createClass({
    componentWillMount: function() {
        var taskId = this.props.params.taskId;

        if (taskId) {
            this.setState({ task: TaskApi.getTaskById(taskId) })
        }
    },

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
