const express = require('express')
const cors = require('cors');
const app = express()

app.use(cors());

app.disable('x-powered-by')

const productosJSON = require('./products/products.json');
const PORT = process.env.PORT || 4321

app.use(express.json())

app.get('/productos', (req, res) => {

    const { categoria, tag_list } = req.query

    if (categoria) {
        const filteredProducts = productosJSON.filter(
            producto => producto.categoria && producto.categoria.toLowerCase() === categoria.toLowerCase()
        )
        return res.json(filteredProducts)
    }

    if (tag_list) {

        const filteredProducts = productosJSON.filter(
            producto => producto.tag_list.some(t => t.toLowerCase() === tag_list.toLowerCase())
        )
        return res.json(filteredProducts)
    }
    res.json(productosJSON)
})


app.get('/productos/:id', (req, res) => {
    const { id } = req.params
    const producto = productosJSON.find(producto => producto.id == id)
    if (productosJSON) return res.json(producto)

    res.status(404).json({ message: 'Product not found' })
})

app.post('/productos', (req, res)=>{ 
        res.status(201).json(req.body)
})


app.use((req, res) => {
    res.status(404).redirect('http://http.cat/404');
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
})