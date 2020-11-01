const Product = require('../models/Product');

const mongoose = require('mongoose');

const URI = process.env.DB || 'mongodb://carlos:Fl0reria@ds231090.mlab.com:31090/lafloreria';

mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(db => console.log('BD is connected '))
    .catch(err => console.error(err));



const products = [
    new Product({
        nombre: 'tuna',
        precio: 50,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/cactus-espinoso-verde-sobre-fondo-rosa_23-2147842416.jpg',
        categoria: 'sombra',
        stock: 15,
        
    }),
    new Product({
        nombre: 'Nopal',
        precio: 50,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum aut non nostrumaut non nostrumaut non nostrum aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/planta-oficina_23-2148003008.jpg',
        categoria: 'sombra',
        stock: 15,
        
    }),
    new Product({
        nombre: 'Suculenta 3',
        precio: 40,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/disparo-aislado-selectivo-vertical-planta-cactus-verde-maceta-blanca_181624-2682.jpg',
        categoria: 'sombra',
        stock: 15,
        
    }),
    new Product({
        nombre: 'Abuelito',
        precio: 30,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://image.freepik.com/foto-gratis/coleccion-cactus-plantas-suculentas-vasos-papel_128711-3193.jpg',
        categoria: 'sol',
        stock: 15,
        
    }),
   
    new Product({
        nombre: 'Tulipan',
        precio: 80,
        descripcion: 'aut non nostrumaut non nostrumaut non nostrum',
        foto: 'https://images.pexels.com/photos/931166/pexels-photo-931166.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        categoria: 'sombra',
        stock: 15,
        
    }),
    

];

let done = 0;  
for (let index = 0; index < products.length; index++) {
    products[index].save(() =>{
        done ++
        if(done === products.length){
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
    console.log("Successfull Seeders");

    return;
}