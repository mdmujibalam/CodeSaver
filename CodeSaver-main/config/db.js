const mongoose=require('mongoose');
const config=require('config');
const connectDB = async() => {
    await mongoose.connect(config.get('http://localhost:27017'),{
        useNewUrlParser:true,
        useCreateIndex:true,
        useUnifiedTopology:true,
        useFindAndModify:true
    });

    console.log("MongoDB connected")
}
module.exports=connectDB;
