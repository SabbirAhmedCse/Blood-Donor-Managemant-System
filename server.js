<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routers/userRouter');
=======
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routers/userRouter");
>>>>>>> 931daff (BDMS Update)

const app = express();

// parse application/x-www-form-urlencoded
<<<<<<< HEAD
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('I am ready');
})

app.use('/blood-donor/user', userRouter);

const port = 2021;
const databaseUrl = 'mongodb://localhost:27017/bloodDonor';

const config = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};


app.listen(port, (req,res) => {
    console.log(`server is running on port ${port}`);
    mongoose.connect(databaseUrl, config, () => {
        console.log('Data base is runnig!');
    });
})
=======
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

if (process.env.NODE_ENV == "production") {
  app.use(express.static("clients/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "clients", "build", "index.html"));
  });
}

app.get("/", (req, res) => {
  res.send("I am ready");
});

app.use("/blood-donor/user", userRouter);

const port = 2021;
const databaseUrl = "mongodb://localhost:27017/bloodDonor";

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

app.listen(port, (req, res) => {
  console.log(`server is running on port ${port}`);
  mongoose.connect(databaseUrl, config, () => {
    console.log("Data base is runnig!");
  });
});
>>>>>>> 931daff (BDMS Update)
