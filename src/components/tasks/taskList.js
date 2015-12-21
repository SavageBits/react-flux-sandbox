"use strict";

var React = require('react');

var TaskList = React.createClass({
    propTypes: {
        tasks: React.PropTypes.array.isRequired
    },

    render: function() {
        var createTaskRow = function(task) {
            return (
                <li key={task.id} className="list-group-item">
                    {task.taskDescription}:{task.id}
                </li>
            );
        };

        return (
            <div className="panel panel-success">
                today {this.props.divTitle} <span className="badge">0</span>
                <ul className="list-group">
                    {this.props.tasks.map(createTaskRow, this)}
                </ul>
            </div>
        );
    }
});

module.exports = TaskList;
