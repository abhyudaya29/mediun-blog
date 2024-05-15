const jwt=require('jsonwebtoken');

// Verify-token Middleware
exports.auth=async(req,res,next)=>{
    try {
        // get/fetch token
        console.log("token before middleware executed");
        const token=req.cookies.token ||req.body.token ||req.headers.authorization.replace("Bearer ","")
        console.log(token,"???token fetched");
        if(!token){
            return res.status(404).json({
                success:false,
                message:"token is Missing"
            })
        }

        // verify-token
        const decodeToken= jwt.verify(token,process.env.JWT_SECRET);
        console.log(decodeToken,">>>>token decoded");
        req.user=decodeToken;
        console.log(req.user,"????info agter token middleware")
        next()



        
    } catch (error) {
        console.log("Error in auth middleware",error);
        return res.status(500).json({
            success:false,
            message:error
        })
        
    }
}