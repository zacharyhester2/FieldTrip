const mongoose = require('mongoose');
require('dotenv').config();

const uri = `mongodb+srv://thumbLord1:${process.env.DATABASE_PASSWORD}@fieldtrip.uldc5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to db'))
  .catch();
