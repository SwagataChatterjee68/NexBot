const express=require("express")
const {authMiddleware}=require("../middlewares/auth.middleware")
const router=express.Router()

router.get("/",authMiddleware,(req,res)=>{
    res.render("index")
})

module.exports=router