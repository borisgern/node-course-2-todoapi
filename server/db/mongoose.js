var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {mongoose};
