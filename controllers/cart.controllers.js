const cartCtrl = {};


cartCtrl.getCart = async (req, res) => {
    console.log("cart");
    res.render('cart', {
        
    });
}

module.exports = cartCtrl;