const express = require('express')
const bodyParser = require('body-parser');
const https = require('https');
const fs = require('fs');

const connectDB = require('./util/database');
const smallTileController = require('./controllers/smallTile.controller');

// import routes
const smallTileRoutes = require('./routes/smallTile.route');
const mongoose = require('mongoose');

const app = express();

const options = {
    key:fs.readFileSync('key.pem'),
    cert:fs.readFileSync('cert.pem')
};

const conn =  connectDB("mongodb+srv://harshald:harshald@cluster0.1zwtfi8.mongodb.net/globeTrot?retryWrites=true&w=majority");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.use((req, res, next) => {
    req.conn = conn;
    next();
});
app.use('/smallTile',smallTileRoutes)

// https.createServer(options,app).listen(4000,()=>{
//     console.log("Server running on port 4000");
// })

app.listen(4000,options,()=>{
    console.log("Server running on port 4000");
})





