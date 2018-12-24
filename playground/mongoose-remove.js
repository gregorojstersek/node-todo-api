const {
    ObjectID
} = require('mongodb');

const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');

const id = '5c1b52abbbdadbe013cb60c011';

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
}

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndRemove('5c20d47d9cb1d9b0bedd2976').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({
    _id: '5c20d4f69cb1d9b0bedd2994'
}).then((todo) => {
    console.log(todo);
});

// User.findById('5c0e488917ec096002cb3729').then((user) => {
//     if (!user) {
//         return console.log('User not found!');
//     }
//     console.log(JSON.stringify(user, undefined, 2));
// }, (e) => {
//     console.log(e);
// });