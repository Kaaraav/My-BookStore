import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    BookName:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    PublishedYear:{
        type:String,
        required:true
    }

})
const BookModel=mongoose.model('BookModel',bookSchema)
export default BookModel