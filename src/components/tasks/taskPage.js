"use strict";

var React = require('react');
var TaskApi = require('../../api/taskApi');
var TaskList = require('./taskList');

var TaskPage = React.createClass({
    getInitialState: function() {
        return {
            tasks: []
        };
    },

    componentDidMount: function() {
        if(this.isMounted()) {
            //will need to use callback or promise when actually hitting db
            // so we call setState after the data is returned from the datasource
            this.setState({ tasks: TaskApi.getAllTasks() });
        }
    },

    render: function() {
        return (
            <div className="panel panel-success">
                <TaskList tasks={this.state.tasks} divTitle="hello"/>
            </div>
        );
    }
});

module.exports = TaskPage;
