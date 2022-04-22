const express = require('express')
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors')

app.use(cors())
var server = app.listen(3002, function () {
    console.log("server is running at =", server.address().port);
})
app.use(bodyParser.json())
app.use(bodyParser.raw())
