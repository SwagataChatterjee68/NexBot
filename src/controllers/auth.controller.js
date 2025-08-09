const userModel=require("../models/user.model");
const bcryptjs=require("bcryptjs")

const registerController= async(req,res)=>{
    const {username,email,password}=req.body;
    const ifUserExsist= await userModel.findOne({email}&&{username});
    if(ifUserExsist){
        return res.json({
            message:"User Alrady Exsist"
        })
    }
    const user = await userModel.create({
        email,
        username,
        password: await bcryptjs.hash(password,10)
    })
}