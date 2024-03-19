import React, { useEffect, useState } from 'react'
import axios from 'axios'
import LoadingScreen from '../Component/LoadingScreen'
import { Link } from 'react-router-dom';
import { FaPlusCircle, FaInfoCircle, FaEdit, FaTrash } from 'react-icons/fa';
import './styles/HomePage.css'
function HomePage() {
    const[books,setBook]=useState([])
    const[loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(true)
        axios.get("http://localhost:3000/book/")
        .then((res)=>{//data from the api
            setBook(res.data)
            setLoading(false)//once get a response change to false
            
        })
        .catch((err)=>{
            console.log(err)
            setLoading(false)
        })
    },[])
  return (
    <div className=''>
      <div className='header'> {/* justify Item to center */}
        <h1> Books List</h1> {/* add this in the right most side */}
        <Link to='/book/Create' className='operation-icon'> {/* add this in the left most side*/}
          <FaPlusCircle style={{ color: 'orange', fontSize: '24px'}}/>
          {/* include add icon here */}
        </Link>

      </div>
      <div className='table-container'>
      {loading ? (
        <div className='loading-screen'>
             <LoadingScreen />
        </div>
  ):(
    <table className='table'>
    <thead>
      <tr>
        <th>No</th>{/*col names*/}
        <th>Title</th>
        <th>Author</th>
        <th>Published Year</th>
        <th>Operations</th>
      </tr>
    </thead>
    <tbody>
      {
      books && books.length > 0 ? (
        books.map((book, index) => (
          <tr key={book._id}>
            <td>{index + 1}</td>
            <td>{book.BookName}</td>
            <td >{book.Author}</td>
            <td>{book.PublishedYear}</td>
            <td>
              <div className='operation-icon'>
                <Link to={`/book/show/${book._id}`}>
                  <FaInfoCircle style={{ color: 'green' }}/>
                </Link>
                <Link to={`/book/update/${book._id}`}>
                  <FaEdit  style={{ color: 'blue' }}/>
                </Link>
                <Link to={`/book/delete/${book._id}`}>
                  <FaTrash style={{ color: 'red' }}/>
                </Link>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="5" className='no-books'>No books found</td>
        </tr>
      )}
    </tbody>
  </table>
)}
</div>

    </div>

  )

}

export default HomePage