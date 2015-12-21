"use strict";

var React = require('react');
var TaskApi = require('../../api/taskApi');
var TaskList = require('./taskList');
var TaskStore = require('../../stores/taskStore');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var TaskPage = React.createClass({
    mixins: [ReactFireMixin],

    statics: {
            willTransitionTo: function(transition, params, query, callback) {
                if (!confirm('Are you sure you want to see this page?')) {
                    transition.abort();
                } else {
                    callback();
                }

            },
            willTransitionFrom: function(transition, component) {
                if (!confirm('Are you sure you want to leave this page?')) {
                    transition.abort();
                }
            }
    },

    getInitialState: function() {
        console.log('getting initial state of task list');
        return {
            tasks: TaskStore.getAllTasks()
        };
    },

    // componentWillMount: function() {
    //     console.log('mounted tasklist');
    //     var ref = new Firebase("https://shining-inferno-6516.firebaseio.com/");
    //     this.bindAsArray(ref, "items");
    // },

    // componentDidMount: function() {
    //     if(this.isMounted()) {
    //         //will need to use callback or promise when actually hitting db
    //         // so we call setState after the data is returned from the datasource
    //         //this.setState({ tasks: TaskApi.getAllTasks() });
    //
    //         // TaskApi.loadTasks(function(){
    //         //     console.log('tasks loaded');
    //         // });
    //     }
    // },

    render: function() {
        return (
            <div className="panel panel-success">
                <TaskList tasks={this.state.tasks} divTitle="hello"/>
            </div>
        );
    }
});

module.exports = TaskPage;
