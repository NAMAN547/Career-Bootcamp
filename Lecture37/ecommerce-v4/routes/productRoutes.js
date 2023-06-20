const express = require("express");
const router =  express.Router();
const Product = require("../models/Product");

const {isLoggedIn} = require("../middleware")


// get all the products

router.get("/", async(req,res)=>{

    const products =  await Product.find({});

    res.render("products/index",{products});

       
})

// get form to create new product

router.get("/new",isLoggedIn, (req,res)=>{

    res.render("products/new")

})

// create a new product

router.post("/",isLoggedIn, async(req,res)=>{

    const {name, img, price, desc} = req.body;

     await Product.create({name, price, desc, img});

     req.flash("success", "Product added successfully!")

     res.redirect("/products")
})


// show product route

router.get("/:productid", async(req,res)=>{

    const {productid} = req.params;

      const product = await Product.findById(productid).populate("reviews");

    //   console.log(productid)

      res.render("products/show", {product})

})

// get edit form

router.get("/:productid/edit",isLoggedIn,  async(req,res)=>{

    const {productid} = req.params;

    const product = await Product.findById(productid);

      res.render("products/edit", {product})
})

router.patch("/:productid",isLoggedIn, async(req,res)=>{

     const {productid} = req.params;

     const {name,img,price, desc} =req.body;

     await Product.findByIdAndUpdate(productid, {name, price, img, desc});

     req.flash("success", " Product updated successfully!")

     res.redirect(`/products/${productid}`)
})


router.delete("/:productid",isLoggedIn, async(req,res)=>{

     const {productid} = req.params;

    await Product.findByIdAndDelete(productid);

    req.flash("error", " One Product has been deleted!")
     
     res.redirect("/products")

})

module.exports = router