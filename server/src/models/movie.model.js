import mongoose,{Schema} from  'mongoose';

const movieSchema = new Schema({
    name:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        required:true,
    },
    airing:{
        type:Boolean,
        required:true,
    },
    bookings:{
        type:[{
            name:{
                type:String,
                required:true,
            },
            number:{
                type:Number,
                required:true,
            }
        }]
    },
})
export const Movie=mongoose.model("Movie", movieSchema);