const cors = require('cors')
const express = require('express');
var config=require("./config/db");
const app = express();
const port = process.env.PORT || 3301;
const bodyParser = require("body-parser");

app.use(cors());
app.options('*',cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.listen(port, ()=> {
    console.log(`Server running at http://localhost:${port}`);
})