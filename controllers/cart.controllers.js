const cartCtrl = {};
let cart = {};

let msg = '';
const Cart = require('../models/Cart');
cartCtrl.getCart = async (req, res) => {
    const arrayCart = await Cart.find();
   
    msg = "Carrito";
    res.render('cart', {
        arrayCart: arrayCart,
        msg: msg,
    });
}

cartCtrl.createCart = async (req,res) =>{

    msg = "producto agregado";
    res.redirect('/')
}
module.exports = cartCtrl;