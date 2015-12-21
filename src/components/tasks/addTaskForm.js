"use strict";

var React = require('react');

var AddTaskForm = React.createClass({
    propTypes: {
        task: React.PropTypes.object.isRequired,
        onSave: React.PropTypes.func.isRequired,
        onChange: React.PropTypes.func.isRequired,
        errors: React.PropTypes.object
    },

    render: function() {
        return (
            <div>
                <div className="panel panel-info">
                    <div className="panel-body">
                    <form ng-submit="todoCtrl.createTodo()">
                    <div className="form-group">
                        <label htmlFor="inputTodoText">what is happening</label>
                        <input className="form-control" id="inputTodoText" type="text" size="30"
                            name="taskDescription"
                            value={this.props.task.taskDescription}
                            onChange={this.props.onChange}
                            error={this.props.errors.taskDescription} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoDate">when it be</label>
                        <input className="form-control" id="inputTodoDate" type="date"
                            />
                    </div>
                    <input className="btn btn-primary btn-sm" type="submit" value="add"
                        onClick={this.props.onSave} />
                    </form>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AddTaskForm;
