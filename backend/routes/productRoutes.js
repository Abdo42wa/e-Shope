import express from "express";
import asyncHandler from 'express-async-handler'
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js'

// get all product
router.route('/').get(getProducts)


// get product by id
router.route('/:id').get(getProductById)

export default router;