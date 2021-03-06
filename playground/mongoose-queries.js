const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');
/* 
var id = '5bf575abc352ea565c4b3077';

if (!ObjectID.isValid(id)){
    console.log('Id not valid');
};

Todo.find({
    _id: id
}).then((todos)=>{
    console.log('Todos', todos);
});

Todo.findOne({
    _id: id
}).then((todo)=>{
    console.log('Todo', todo);
});

Todo.findById(id).then((todo)=>{
    if(!todo){
        return console.log('ID not found');
    }
    console.log('Todo by id', todo);
}).catch((e)=>console.log(e)); */

User.findById('5bf6528bf8c917773a347663').then((user) => {
    if (!user) {
        return console.og('Unable to find user');
    }
    console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
    console.log(e);
});
