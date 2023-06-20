const express = require("express");
const router = express.Router();
const User = require("../models/User")
const Product = require("../models/Product")


router.get("/products/user/cart", (req,res)=>{

    const cart = req.user.cart;

    const totalAmount = cart.reduce((sum, item)=> sum + item.price * item.count, 0)

    res.render("cart/cartPage", {cart, totalAmount})

})

router.post("/products/:productid/cart", async(req,res)=>{


    const {productid} = req.params;

    const userid = req.user._id;
    
    const user = await User.findById(userid);

    // check if product is already present
    
    const isPresent = user.cart.some((item)=> item.id.equals(productid))

    if(isPresent){

       const updatedCart =  user.cart.map((item)=> item.id.equals(productid) ? {...item, count : item.count + 1} : item );

       user.cart = updatedCart
    }
    else{

        const product = await Product.findById(productid);

        user.cart.push({
            name : product.name,
            price: product.price,
            img: product.img,
            id: product._id
         })

    }
    

     await user.save();

     res.redirect("/products/user/cart")
})






module.exports = router;