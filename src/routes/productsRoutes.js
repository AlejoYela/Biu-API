const express = require("express");
const Producto = require('../../models/Product');

const router = express.Router();

router.get('/', async(req, res) => {

    try {
        const products = await Producto.find()
        res.json(products)
    } catch (error) {
        res.status(500).json({ message: "Error al obtener los datos", error });
    }
})

router.get('/:id', async (req, res) => {
    try{
        const product = await Producto.findOne({id: req.params.id})
        if(!product){
            return res.status(404).json({ message: "Producto no encontrado" });
        }
        res.json(product);
    } catch(error){
        res.status(500).json({ message: "Error al obtener el producto", error });
    }
})

router.post('/', (req, res) => {
    res.status(201).json(req.body)
})

module.exports = router;
