"use strict";

var React = require('react');
var Router = require('react-router');
var AddTaskForm = require('./tasks/addTaskForm');
var TaskPage = require('./tasks/taskPage');
var TaskApi = require('../api/taskApi');
var toastr = require('toastr');

var Home = React.createClass({
    mixins: [
        Router.Navigation
    ],

    getInitialState: function() {
        return {
            task: { what: '', when: '' },
            errors: {}
        };
    },

    setTaskState: function(event) {
        var field = event.target.name;
        var value = event.target.value;

        this.state.task[field] = value;

        return this.setState({ task: this.state.task });
    },

    saveTask: function(event) {
        event.preventDefault();

        if (!this.authorFormIsValid()) {
            return;
        }

        TaskApi.saveTask(this.state.task);

        toastr.success('Did it');

        this.transitionTo('about');
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};
    },

    render: function() {
        return (
            <div>
                <AddTaskForm
                    task={this.state.task}
                    onChange={this.setTaskState}
                    onSave={this.saveTask} />
                <TaskPage />
            </div>
        );
    }
});

module.exports = Home;
