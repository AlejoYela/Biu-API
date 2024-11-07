const express = require('express')
const cors = require('cors');
const app = express()
const dotenv = require("dotenv");
require("./src/config/db.js");

const productsRouter = require("./src/routes/productsRoutes.js")

dotenv.config()

app.use(cors());

app.disable('x-powered-by')

const productosJSON = require('./products/products.json');
const PORT = process.env.PORT || 3000

app.use(express.json())

app.use("/productos", productsRouter)

app.use((req, res) => {
    res.status(404).redirect('http://http.cat/404');
})

app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
}) 