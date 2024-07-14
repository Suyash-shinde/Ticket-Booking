import mongoose from "mongoose"

const connectDb =async ()=>{
    try{
        const status = await mongoose.connect(process.env.MONGODB_URL);
        if(status){
            console.log("Database is connected")
        }    
    }
    catch(error){
        console.log("Error connecting to Databse",error);
        process.exit(1);
    }
}   
export default connectDb;