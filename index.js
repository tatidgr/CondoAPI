const express = require('express');

const apiRoutes = require("./api-routes");

const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://sa:250020@cluster0-288g4.mongodb.net/Condo?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

var db = mongoose.connection;

// Added check for DB connection

if(!db)
    console.log("Error connecting db");
else
    console.log("Db connected successfully");

app.get('/', (req, res) => res.send('Hello World with Express'));

app.listen(port, () =>{
    console.log(`Running Condo on port ${port}`);
});

app.use('/api', apiRoutes);