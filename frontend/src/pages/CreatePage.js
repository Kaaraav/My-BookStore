import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingScreen from '../Component/LoadingScreen'
import BackButton from '../Component/BackScreen'
import './styles/Createpage.css'
function CreatePage() {
  const[BookName,setBookName]=useState()
  const[Author,setAuthor]=useState()
  const[PublishedYear,setPublishedYear]=useState()
  const[Loading,setLoading]=useState(false)

  const navigate = useNavigate()
  const AddBook=()=>{
    const data={
      BookName,
      Author,
      PublishedYear
    }
    setLoading(true)//add data
    axios.post('http://localhost:3000/book',data)
    .then(()=>{
      setLoading(false)
      navigate('/')//navigate to home page after pushing
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }
  return(
  <div className="container">
      <BackButton />
      <h1 className="title">Add Book</h1>
      {Loading && <LoadingScreen />}
      <div className="form-group">
        <label className="label">Book Name</label>
        <input type='text' value={BookName} onChange={(e) => setBookName(e.target.value)} className="input"/>
      </div>
      <div className="form-group">
        <label className="label">Author</label>
        <input type='text' value={Author} onChange={(e) => setAuthor(e.target.value)} className="input"/>
      </div>
      <div className="form-group">
        <label className="label">Published Year</label>
        <input type='text' value={PublishedYear} onChange={(e) => setPublishedYear(e.target.value)} className="input"/>
      </div>
      <button className="button" onClick={AddBook}>ADD BOOK</button>
    </div>
  )
}

export default CreatePage