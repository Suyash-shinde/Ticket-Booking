import mongoose,{Schema} from  'mongoose';

const seatSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    reserved:{
        type:Boolean,
        required:true,
    },
})
export const Seat=mongoose.model("Seat", seatSchema);