const express = require('express');

const router = express.Router();

const productsController = require('../controllers/products')

// CREATE -> POST : localhost:4000/v1/customer/product
router.post('/product', productsController.createProduct)

// READ -> GET : localhost:4000/v1/customer/products
router.get('/products', productsController.getAllProduct)

// router.put('/product', (req, res, next) => {
//     res.json({name: "Hanif Pratama", email: "galaxijersey3@gmail.com"})
//     next()
// })

// router.delete('/product', (req, res, next) => {
//     res.json({name: "Hanif Pratama", email: "galaxijersey3@gmail.com"})
//     next()
// })

module.exports = router;