const express = require('express');
const mongoose = require('mongoose');
const product = require('./routes/product');
const auth = require('./routes/auth');

const cors = require('cors');
const { app, server } = require('./utils/socket');



require('dotenv').config();
const port = 4000;

const cookieParser = require('cookie-parser');

app.use(cookieParser());


const allowedOrigins = [
  'http://localhost:4500', "http://localhost:4000"

];

const uri = "mongodb+srv://gvpcworld:gvpcworld@cluster.0cv8pyz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster"; 

const corsOptions = {


  origin: function (origin, callback) {

    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  credentials: true,
  optionsSuccessStatus: 200, 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(uri, {
  dbName: 'gvpcworld',
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => {
  console.log(err);
});

app.use('/products',product);
app.use('/', auth);


server.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

const { MongoClient } = require('mongodb');



async function listUserEmails() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const database = client.db("Pcworld"); 
    const usersCollection = database.collection("user"); 

    const users = await usersCollection.find().toArray();
    users.forEach(user => {
      console.log(user.email); 
    });
  } finally {
    await client.close();
  }
}


  



