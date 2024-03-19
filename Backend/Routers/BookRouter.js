import express from "express";

import BookModel from "../Models/BookModel.js";

const router=express.Router()

router.route('/book')
.get(async(req,res)=>{//read
    try{
        const book=await BookModel.find({})
        return res.status(200).json(book)
    }catch(err){
       console.log(err)
       res.status(404).send("could not get request")
    }
})
.post(async(req,res)=>{//create
    try{
        const addBook={//json
            BookName:req.body.BookName,
            Author:req.body.Author,
            PublishedYear:req.body.PublishedYear
        }
        const book = await BookModel.create(addBook)
        return res.status(200).json(book)
    }
    catch(err){
        console.log(err)
        res.status(404).send("is not created")
    }
})
router.route('/book/:id')
.get(async(req,res)=>{
    try{
        const {id}=req.params//getting the requested id as parameters
        const findId=await BookModel.findById(id)
        res.status(200).json(findId)
    }
    catch(err){
        console.log(err)
        res.status(400).send("no id found")
    }
})
.put(async(req,res)=>{//update
    try{
    const {id}=req.params
    const updateBook={//changing the existing doc
        BookName:req.body.BookName,
        Author:req.body.Author,
        PublishedYear:req.body.PublishedYear
    }
    const createId=await BookModel.findByIdAndUpdate(id,updateBook)
    res.status(200).json(createId)
    }
    catch(err){
        console.log(err)
        res.status(404).send("error has occured")
    }
})
.delete(async(req,res)=>{
    try{
        const {id}=req.params
        const deleteId=await BookModel.findByIdAndDelete(id)
        res.status(200).send("deleted")
    }catch(err){
        console.log(err)
        res.status(404).send("cannot find id")
    }
})
export default router