const cartCtrl = {};
let cart = {};

let msg = '';
let total;
const Cart = require('../models/Cart');
const Product = require('../models/Product');


cartCtrl.getCart = async (req, res) => {
    total = 0;
    const arrayCart = await Cart.find();
    for (let index = 0; index < arrayCart.length; index++) {
        const element = arrayCart[index];
        let precio = element.precio;
        total += precio;

    }
    msg = "Carrito";
    res.render('cart', {
        arrayCart: arrayCart,
        msg: msg,
        total: total
    });
}

cartCtrl.createCart = async (req,res) =>{
   
    const product = await Product.findById(req.body.id).then( async (data) =>{
        const productAdd  = await Cart.find({
            idProducto: data._id
        }).then((doc) =>{
            const productArr= {
                idProducto: data._id,
                nombre: data.nombre,
                precio: data.precio,
                descripcion: data.descripcion,
                foto: data.foto,
                categoria: data.categoria,
                total: 1
            }
            if (doc.length == 0) {
                console.log("Nooooooooo");
                const productAdd =  new Cart(productArr);
                productAdd.save();
            }  else {
                doc.forEach(element => {
                    console.log(element);
                    console.log(element.total +1);
                    const productArr = {
                        idProducto: data._id,
                        nombre: data.nombre,
                        precio: data.precio,
                        descripcion: data.descripcion,
                        foto: data.foto,
                        categoria: data.categoria,
                        total: element.total + 1
                    }
                   
                    console.log(productArr);
                    Cart.findByIdAndUpdate(element._id, productArr );
                });
               
            }
        });
        
        /* const newProduct =  await new Cart(productNew);
        newProduct.save();
        const cart = Cart.find();
        console.log("--->", cart);  */
    });

    
    

    

    /* if (newProduct.nombre != '' && newProduct.categoria != '' && newProduct.precio != '' && newProduct.stock != '' && newProduct.descripcion != '' && newProduct.foto != '') {

        await newProduct.save();

        msg = 'Producto Creado';
    }
    else {
        msg = 'Error al crear, completa los campos';
    } */
    res.redirect('/#catalogo');
}
module.exports = cartCtrl;