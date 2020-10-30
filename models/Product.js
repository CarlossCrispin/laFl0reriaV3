const { Schema, model } = require('mongoose');

const productSchema = new Schema({

    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    foto: { type: String, required: true },
    categoria: { type: String, required: true },
    stock: { type: Number, required: true },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Product', productSchema);