// createBlog
const express=require('express');
const router=express.Router();
const{createBlog,updateBlog,getBlog,getAllBlogs}=require("../controllers/blog.controllers");
const{auth}=require("../middlewares/auth.middleware");
const { route } = require('./user.routes');
router.post('/create-blog',auth,createBlog);
router.put('/update-blog',auth,updateBlog);
router.get('/get-blog',getBlog);
router.get('/bulk',getAllBlogs)
module.exports=router