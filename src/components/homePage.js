"use strict";

var React = require('react');
var Router = require('react-router');
var AddTaskForm = require('./tasks/addTaskForm');
var TaskPage = require('./tasks/taskPage');
//var TaskApi = require('../api/taskApi');
var TaskActions = require('../actions/taskActions');
var TaskStore = require('../stores/taskStore');
var DummyStore  = require('../stores/dummyStore');
var toastr = require('toastr');

var Home = React.createClass({
    mixins: [
        Router.Navigation
    ],

    statics: {
        willTransitionFrom: function(transition, component) {
            if (component.state.dirty && !confirm('Leave without saving?')) {
                transition.abort();
            }
        }
    },

    getInitialState: function() {
        return {
            task: {
                id: 0,
                taskDescription: '',
                taskDate: ''
            },
            errors: {},
            dirty: false
        };
    },

    setTaskState: function(event) {
        this.setState({dirty: true});

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

        //TaskApi.saveTask(this.state.task);
        console.log('homePage:saveTask ' + this.state.task.taskDescription);
        TaskActions.createTask(this.state.task);

        this.setState({dirty: false});

        toastr.success('Did it');

        //this.transitionTo('app');
    },

    authorFormIsValid: function() {
        var formIsValid = true;
        this.state.errors = {};

        if (this.state.task.taskDescription.length < 1) {
            this.state.errors.taskDescription = 'No what!';
            formIsValid = false;
        }

        this.setState({ errors: this.state.errors });

        return formIsValid;
    },

    render: function() {
        return (
            <div>
                <AddTaskForm
                    task={this.state.task}
                    onChange={this.setTaskState}
                    onSave={this.saveTask}
                    errors={this.state.errors} />
                <TaskPage />
            </div>
        );
    }
});

module.exports = Home;
