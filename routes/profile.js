const path=require('path')
const express=require('express')
const router=express.Router();
const signupController=require('../controllers/signup')


router.get('/',(req,res,next)=>{
    res.render('profile');
})




module.exports=router;