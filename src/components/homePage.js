"use strict";

var React = require('react');

var Home = React.createClass({
   render: function() {
        return (
            <div className="container">
                <div className="panel panel-info">
                    <div className="panel-body">
                    <form ng-submit="todoCtrl.createTodo()">
                    <div className="form-group">
                        <label htmlFor="inputTodoText">whats happening</label>
                        <input className="form-control" id="inputTodoText" type="text" size="30"
                               placeholder="add new todo here" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputTodoDate">when it be</label>
                        <input class="form-control" id="inputTodoDate" type="date" />
                    </div>
                    <input class="btn btn-primary btn-sm" type="submit" value="add" />
                    </form>
                    </div>
                </div>
            </div>
        );
   }
});

module.exports = Home;
