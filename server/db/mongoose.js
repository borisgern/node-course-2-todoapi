var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
let db = {
  localhost: 'mongodb://localhost:27017/TodoApp',
  mlab: 'mongodb://borisgern:1@ds117749.mlab.com:17749/test-todo-app-api'
};
mongoose.connect(process.env.PORT ?  db.mlab: db.localhost);
module.exports = {mongoose};
