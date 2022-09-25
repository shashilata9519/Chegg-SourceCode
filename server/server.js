const express=require('express')
require("dotenv").config();
const cors=require('cors')
const connectDB=require('./config/db');
const audio=require('./model/language');
const machine=require('./model/machine')
const location=require('./model/location')
const product=require('./model/product')
const lab=require('./model/workshop')

const app=express();
connectDB(); //database calling
app.use(express.json()) //initialize middleware
app.use(cors());

//routes
app.get('/location',async(req,resp)=>{
    const result=await location.find();
    if(result.length>0)
    {
        resp.send(result)
    }else{
        resp.send({result:"no result"})
    }
})
app.get('/workshop',async(req,resp)=>{
    const result=await lab.find();
    if(result.length>0)
    {
        resp.send(result)
    }else{
        resp.send({result:"no result"})
    }
})
app.get('/product',async(req,resp)=>{
    const result=await product.find();
    if(result.length>0)
    {
        resp.send(result)
    }else{
        resp.send({result:"no result"})
    }
})
app.get('/language',async(req,resp)=>{
    const result=await audio.find();
    if(result.length>0)
    {
        resp.send(result)
    }else{
        resp.send({result:"no result"})
    }
})
app.get('/language/:id',async(req,resp)=>{
    const result=await audio.findOne({_id:req.params.id})
    if(result)
    {
        resp.send(result)
    }else{
        resp.send({result:"no result"})
    }
})

app.post('/add',async(req,resp)=>{
    let data = new audio(req.body);
    let result = await data.save();
    resp.send(result)

})

app.get('/',(req,resp)=>{
    resp.send("welcome to heroku")
})

   


const port=process.env.PORT || 8000;

app.listen(port,()=>console.log('server is running'))


