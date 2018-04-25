const {ObjectId} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// var id = '5ae0e4af9ade5d2be8da44a';
//
// if (!ObjectId.isValid(id)) {
//   console.log('ID not valid');
// };

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
// if (!todo) {
//   return console.log('ID not found');
// }
//   console.log('Todo By ID', todo);
// }).catch((e) => console.log(e));

var id = '5ae066b84a5e431f6ca7a535';

User.findById(id).then((user) => {
  if (!user) {
    return console.log('User not found');
  }
  console.log('User found', user);
}).catch((e) => console.log(e));
