const express = require('express');

const errorMiddleware = require('./middleware/error')
const app = express();


app.use(express.json());
// ///import routes
const Product = require('./routes/divisionROute');
app.use("/api/v1",Product);
//  const User = require('./routes/userRoute')
//  app.use("/api/v1",User)

 //middleware for eror
 app.use(errorMiddleware);
module.exports = app;