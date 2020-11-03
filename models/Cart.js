const { Schema, model } = require('mongoose');

const cartSchema = new Schema({

    idProducto: { type: String, required: true },
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    descripcion: { type: String, required: true },
    foto: { type: String, required: true },
    categoria: { type: String, required: true },
    total: { type: Number, required: true } ,
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('Cart', cartSchema);