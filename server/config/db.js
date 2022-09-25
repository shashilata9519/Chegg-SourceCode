const mongoose=require('mongoose');

const db=process.env.MONGO_URL;

const connectDB=async()=>{
    try{
        await mongoose.connect(db,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('mongodb is connected')
    }catch(err)
    {
        console.log(err.message)

    }
}
module.exports=connectDB;