import express from "express";
import asyncHandler from 'express-async-handler'
const router = express.Router();
import { getProducts, getProductById, deleteProduct, updateProduct, createProduct } from '../controllers/productController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

// get all product
router.route('/').get(getProducts).post(protect, admin, createProduct)


// get product by id
router.route('/:id')
    .get(getProductById)
    .delete(protect, admin, deleteProduct)
    .put(protect, admin, updateProduct);

export default router;