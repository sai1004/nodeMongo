const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

//Import Routes
const postsRoute = require("./routes/posts");

app.use('/posts', postsRoute);

//Routes
app.get('/', (req, res) => {
  res.send('/');
});

//Connect To DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log(" Connected to DB! ")
);

// listener on server
app.listen(3000);
