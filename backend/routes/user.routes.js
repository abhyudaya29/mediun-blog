const express=require('express');
const router=express.Router()
const {createUser,signIn}=require('../controllers/auth.controller')

router.post('/sign-Up',createUser);
router.post('/sign-In',signIn)
module.exports=router