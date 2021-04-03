import express from 'express'
import Product from '../models/productModel.js'
import asynchandler from 'express-async-handler'
const router = express.Router()

//@desc Fetch all products
//@route GET /api/products/
//@access Public
router.get(
    '/', 
    asynchandler(async (req, res) => {
        const products = await Product.find({})
        res.json(products)
}))

//@desc Fetch a product by id
//@route GET /api/products/:id
//@access Public
router.get(
    '/:id',
     asynchandler(async (req, res) => {
        const product = await Product.findById(req.params.id)
        product? res.json(product) : res.status(404).json({ message: "Product Not Found" })
}))

export default router