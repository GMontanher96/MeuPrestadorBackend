const express = require('express')
const routes = require('./routes')
const app = express()
const cors = require('cors');

require('./database')

app.use(express.json())
app.use(routes)
app.use(cors());

//error handling
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
    res.status(err.statusCode).json({
        message:err.message,
    });

})

app.listen(3030, () => {
    console.log("Server started on Port 3030");
})


