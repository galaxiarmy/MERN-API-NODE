const express = require('express');

const app = express();

const productRoutes = require('./src/routes/products')



// GET './users' ==> [{name: Hanif}]

app.use('/', productRoutes)

app.listen(4000);

