const mongoose=require('mongoose');
const config=require('config');
const connectDB = async() => {
    await mongoose.connect(config.get('mongodb://127.0.0.1:27017/node_auth'),{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    });

    console.log("MongoDB connected")
}
module.exports=connectDB;
