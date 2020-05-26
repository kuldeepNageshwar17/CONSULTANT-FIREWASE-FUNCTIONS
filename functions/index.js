const functions = require('firebase-functions');
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
var cors = require('cors'); 


app.use(cors());
app.use(bodyParser.json())

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
 

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const {getAllTodos,
    postOneTodo,
    deleteTodo,
    editTodo
}=require("./APIs/Todos")
const {postuserdata} =require("./APIs/user")
app.put('/todo/:todoId', editTodo);

app.get("/todo",getAllTodos);
app.post('/todo', postOneTodo);
app.post('/users', postuserdata);
app.delete('/todo/:todoId', deleteTodo);


exports.api=functions.https.onRequest(app)
