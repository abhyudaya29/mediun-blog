const express=require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const userRoute=require('./routes/user.routes');
const blogRoute=require("./routes/blog.routes");
const cors = require('cors');
const app=express()
app.use(bodyParser.json());

// Use cookie-parser to parse cookies
app.use(cookieParser());

app.use(express.json())
app.use(
    cors({
        origin: "*",
        credentials: true,
    })
);
const PORT=4000
// User Route
app.use('/api/v1/user',userRoute);

//Blog Route
app.use('/api/v1/blog',blogRoute)
app.get('/',(req,res)=>{
    res.json({
        message:"Hello user",
        success:true,
        status:200
    })
})
app.listen(PORT,()=>{
    console.log(`App is listning at: ${PORT}`)
})