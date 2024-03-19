import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackButton from '../Component/BackScreen'
import LoadingScreen from '../Component/LoadingScreen'
function DeletePage() {
  const[Loading,setLoading]=useState()
  const navigate=useNavigate()//to move to homepage
  const {id}=useParams()
  const deleteBook=()=>{
    setLoading(true)
    axios.delete(`http://localhost:3000/book/${id}`)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((err)=>{
      console.log(err)
      setLoading(false)
    })
  }
  return (
    <div className='container'>{/*css*/}
      <BackButton />
      <h1 className='title'> DELETE Book</h1>
      {
        Loading ? <LoadingScreen /> : ''}
          <div className='message'>Are You Sure You Want To Delete this Book ?</div>
          <button className='button' onClick={deleteBook}>Yes, Delete it</button>
    </div>
  )
}

export default DeletePage