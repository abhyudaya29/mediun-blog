const express=require("express");
const {prisma} =require("../database/dbConfig");
const { all } = require("../routes/user.routes");

exports.createBlog=async(req,res)=>{
    try {
        const userId=req.user.id
        console.log(userId,">>>>user Id");
        const{content,title}=req.body;
        console.log(content,title);
        if(!content ||!title){
            return tes.status(404).json({
                success:false,
                message:"All fields are required"
            })
        }
        const createPost=await prisma.blog.create({
            data:{
                title:title,
                content:content,
                thumbnail:`https://api.dicebear.com/5.x/initials/svg?seed=${title}`,
                authorId:userId,
                // author:req.user.username,
                published: true,
                publishedAt:new Date()

            }
        });
        console.log(createPost,"???post data");
        // if(createPost){
        //     await prisma.blog.update({
        //         where:{
        //             id:userId,
        //             authorId:userId
        //         },
        //         data:{
        //             published:true
        //         }
        //     })
        // }
        return res.status(200).json({
            success:true,
            message:"Post created Successfully",
            data:createPost
        })
        
        
    } catch (error) {
        console.log("error in creating blog",error);
        return res.status(500).json({
            success:false,
            message:"error while Creating Blog"
        })
        
    }

}

exports.updateBlog=async(req,res)=>{
    try {
        const userId=req.user.id;
        console.log(userId,">>>user Id");
        const{title,content,id}=req.body;
        console.log(title,content,id,"???? updated title,content")

        const updatedBlogData=await prisma.blog.update({
            where:{
                id:id,
                authorId:userId
            },
            data:{
                title:title,
                content:content

            }

        });
        console.log(updatedBlogData,">>>updated Blog Data");
        return res.status(200).json({
            success:true,
            message:"blog Updated",
            updatePost:updatedBlogData
        })
        
        
        
    } catch (error) {
        console.log("error while Updating blog",error);
        return res.status(500).json({
            success:false,
            message:"Error While Updating blog"
        })
        
    }
}
exports.getBlog=async(req,res)=>{
    const id=req.query.id
    try {
        console.log("blogId: ",id);
        const findBlog=await prisma.blog.findUnique({
            where:{
                id:parseInt(id, 10)
            },
            select:{
                content:true,
                title:true,
                id:true,
                publishedAt:true,
                thumbnail:true,
                author:{
                    select:{
                        username:true
                    }
                }
            }
        })
        console.log(findBlog,">>blog data");
        if(!findBlog){
            return res.status(404).json({
                success:false,
                message:"No blog found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"Blog Fetched Successfully",
            data:findBlog
        })
        
    } catch (error) {
        console.log("Error while getting blog",error);
        return res.status(500).json({
            success:false,
            message:"Error in Getting Blog"
        })
        
    }
}


exports.getAllBlogs=async(req,res)=>{
    try {
        const allBlogs=await prisma.blog.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                publishedAt:true,
                thumbnail:true,
                author:{
                    select:{
                        username:true
                    }
                }
            }
        });
        console.log(allBlogs);
        if(!allBlogs){
            return res.status(404).json({
                success:false,
                message:"Cant get blogs"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Blogs Fetched SuccessFully",
            data:allBlogs
        })
        
    } catch (error) {
        console.log("error in getting all blogs",error);
        return res.status(500).json({
            success:false,
            message:"Can't Fetch Blogs"
        })
        
    }
}