import mongoose from "mongoose";

const connectDB = async () => {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`);
        console.log("DB Connected");

    }
    catch(err){
        console.log(err);
    }

    // mongoose.connection.on('connected',() => {
    // })


}
// const connectDB=mongoose.connect(`${process.env.MONGODB_URI}/e-commerce`).then(console.log("connected")).catch(err=>console.log(err));

export default connectDB;