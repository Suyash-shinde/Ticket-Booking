import mongoose,{Schema} from  'mongoose';

const seatSchema = new Schema({
    id:{
        type:Number,
        required:true,
        unique:true,
    },
    isBooked:{
        type:Boolean,
        required:true,
    },
    isVisible:{
        type:Boolean,
        required:true,
    },
    onHold:{
        type:Boolean,
        required:true,
    }
})
export const Seat=mongoose.model("Seat", seatSchema);