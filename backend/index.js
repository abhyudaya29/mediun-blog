const express=require('express')
const userRoute=require('./routes/user.routes')
const app=express()
app.use(express.json())
const PORT=3000
app.use('/api/v1/user',userRoute)
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