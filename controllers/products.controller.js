const productsCtrl = {};

// let arrayProducts = require('../data/products');

const Product = require('../models/Product')

let productNow = {};

let msg = '';

productsCtrl.getProducts = async (req, res) => {
    if (msg == '') {
        msg = "Bienvenido";
    } else {
        msg = msg;
    }

    const arrayProducts = await Product.find();
    res.render('index', {
        arrayProducts: arrayProducts,
        msg: msg
    });
    // res.json(arrayProducts)
}

productsCtrl.createProduct = async (req, res) => {

    const newProduct = new Product(req.body);
    await newProduct.save().then

    msg = 'Producto Creado';
    res.redirect('/#productos');
    // res.json('create product');
}


productsCtrl.getProduct = async (req, res) => {

    const product = await Product.findById(req.params.id);

    res.render('edit', {
        productNow: product
    });

}

productsCtrl.editProduct = async (req, res) => {

    await Product.findByIdAndUpdate(req.params.id, req.body);
    msg = 'Producto Actualizado';

    res.redirect('/#productos');

}

productsCtrl.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);

    msg = 'Producto Eliminado';
    res.redirect('/#productos');
}

module.exports = productsCtrl;