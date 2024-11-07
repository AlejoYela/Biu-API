const mongoose = require("mongoose");

const colorSchema = new mongoose.Schema({
    hex: { type: String, required: true },
    nombre: { type: String, required: true }
});

const productoSchema = new mongoose.Schema({
    id: { type: Number, unique: true, required: true },
    nombre: { type: String, required: true },
    coleccion: { type: String, required: true },
    precio: { type: Number, required: true },
    src: { type: String, required: true },
    descripcion: { type: String, required: true },
    calificacion: { type: Number, required: true },
    categoria: { type: String, required: true },
    subcategoria: { type: String, required: true },
    uso: { type: String, required: true },
    stock: { type: Number, required: true },
    tag_list: [{ type: String }],
    colores: [colorSchema] // Referencia al esquema de colores
});

const Producto = mongoose.model("Producto", productoSchema, "products");

module.exports = Producto;
