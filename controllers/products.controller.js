const productsCtrl = {};

// let arrayProducts = require('../data/products');

const Product = require('../models/Product');
const Cart = require('../models/Cart');

let productNow = {};
let cart = {};

let msg = '';

productsCtrl.getProducts = async (req, res) => {
    if (msg == '') {
        msg = "Bienvenido";
    } else {
        msg = msg;
    }

    const arrayProducts = await Product.find();
    const arrayCart = await Cart.find();
    var index = arrayCart.length;
   
    res.render('index', {
        arrayProducts: arrayProducts,
        msg: msg,
        index: index
    });
    // res.json(arrayProducts)
}


productsCtrl.createProduct = async (req, res) => {

    const newProduct = new Product(req.body);

    if (newProduct.nombre != '' && newProduct.categoria != '' && newProduct.precio != '' && newProduct.stock != '' && newProduct.descripcion != '' && newProduct.foto != ''){

        await newProduct.save();
    
        msg = 'Producto Creado';
    }
    else{
        msg = 'Error al crear, completa los campos';
    }
    res.redirect('/#productos');
    // res.json('create product');
}


productsCtrl.getProduct = async (req, res) => {

    const product = await Product.findById(req.params.id);

    console.log(product);
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