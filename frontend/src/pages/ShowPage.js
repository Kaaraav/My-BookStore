import React from 'react'
import BackButton from '../Component/BackScreen'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import LoadingScreen from '../Component/LoadingScreen'
import './styles/ShowPage.css'
function ShowPage() {
    const[book,setBook]=useState({})
    const[loading,setLoading]=useState(false)
    const {id}=useParams()//
    useEffect(()=>{
      setLoading(true)
      axios.get(`http://localhost:3000/book/${id}`)//`=>to use parameters
      .then((res)=>{
        setBook(res.data)
        setLoading(false)
      })
      .catch((err)=>{
        console.log(err)
        setLoading(false)
      })
    },[])
    return (
        <div className="container">
        <BackButton />
        <h1 className="title">Show Book</h1>
        {loading ? (
          <div className="loading-container">
            <LoadingScreen />
            <span className="loading-text">Loading...</span>
          </div>
        ) : (
          <div>
            <div className="info">
              <span className="label">Id:</span>
              <span>{book._id}</span>
            </div>
            <div className="info">
              <span className="label">Title:</span>
              <span>
                {book.BookName}
              </span>
            </div>
            <div className="info">
              <span className="label">Author:</span>
              <span>{book.Author}</span>
            </div>
            <div className="info">
              <span className="label">Published Year:</span>
              <span>{book.PublishedYear}</span>
              </div>
          </div>
        )}
      </div>
    )
  }
  
  export default ShowPage