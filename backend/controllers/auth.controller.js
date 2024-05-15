const express=require("express")
const {prisma} =require("../database/dbConfig")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt");
const { use } = require("../routes/user.routes");
exports.createUser=async(req,res)=>{
    // username email password
    try {
        const {username,password,email}=req.body;
        console.log(username,password,email,">body from user")
        const userExist=await prisma.users.findUnique({
            where:{
                email:email
            }
        })
        if(userExist){
            return res.status(404).json({
                success:false,
                message:"User already Exist!"
            })
        }
        const hashedPassword=await bcrypt.hash(password,10);
        console.log(hashedPassword,">hashed psw")
        const userCreation=await prisma.users.create({
            data:{

                username:username,
                password:hashedPassword,
                email:email,
                // blog:{
                //     create:blog.map((blogs)=>(
                //         {
                //             content:blogs.content,
                //             title:blogs.title,
                //             thumbnail:blogs.thumbnail,
                //             published: blog.published || false,
                //             publishedAt: blog.publishedAt || new Date()
                //         }
                //     ))
                // }
                

            }
        })
        console.log(userCreation,">>>>data of created user")
       const payload={
        username:userCreation.username,
        emal:userCreation.email,
        blog:userCreation.blog
        
       }
       console.log(payload,"payload data")
        return res.status(200).json({
            success:true,
            message:"User created Successfully",
            data:payload
        })

        
    } catch (error) {
        console.log("error occured in create User",error)
        return res.status(500).json({
            success:false,
            message:error
        })
        
    }
}

exports.signIn=async(req,res)=>{
    try {
        const{email,password}=req.body;
        console.log(email,password);
        if(!email ||!password){
            return res.status(404).json({
                success:false,
                message:"All fileds are required"
            })
        }
        const user=await prisma.users.findUnique({
            where:{
                email:email
            }
        })
        console.log(user,">>user details");
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not Registered"
            })
        }
        // Verify Password
        if(await bcrypt.compare(password,user.password)){
            const payload={
                email:user.email,
                id:user._id,
                username:user.username

            }
            // generate token
            const token=jwt.sign(payload,process.env.JWT_SECRET,{
                expiresIn:"2h"
            });
            // create cookie
            user.password=undefined
            const options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            res.cookie("token",token,options).status(200).json({
                success:true,
                token,
                user,
                message:"User LoggedIn successfully"

            })

        }

        
    } catch (error) {
        console.log("error while sign-in",error)
        return res.status(500).json({
            success:false,
            message:error
        })
        
    }
}