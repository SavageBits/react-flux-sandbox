"use strict";

var React = require('react');
var AddTaskForm = require('./tasks/addTaskForm');

var Home = React.createClass({
   render: function() {
        return (
            <AddTaskForm />
        );
   }
});

module.exports = Home;
