const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors  = require('cors');
require('dotenv/config');

//middleware
app.use(cors());
app.use(bodyParser.json());


const userroute =require('./routes/usersapi');
const deptroute =require('./routes/deptapi');

app.use('/usersapi',userroute);
app.use('/deptapi',deptroute);


app.get('/', (req, res) => {
    res.send('hello ');
});

mongoose.connect("mongodb+srv://murali:123murali@cluster0.fsuls.mongodb.net/API_TEST?retryWrites=true&w=majority", () => 
   console.log('connected to DB')
);

// const { MongoClient } = require('mongodb');
// const uri = "mongodb+srv://vinay:vinay123@cluster0.2zkfv.mongodb.net/API_TEST?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

app.listen(3000);
