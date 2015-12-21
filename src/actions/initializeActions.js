var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var TaskApi = require('../api/taskApi');

var InitializeActions = {
    initApp: function() {
        console.log('initializeActions:initApp calling dispatch for initializing tasks')
        Dispatcher.dispatch({
            actionType: ActionTypes.INITIALIZE,
            initialData: {
                tasks: TaskApi.getAllTasks()
            }
        });
    }
};

module.exports = InitializeActions;
