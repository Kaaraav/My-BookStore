import React from 'react'
import HomePage from './pages/HomePage'
import CreatePage from './pages/CreatePage'
import ShowPage from './pages/ShowPage'
import UpdatePage from './pages/UpdatePage'
import DeletePage from './pages/DeletePage'
import { Route,Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage />}/>{/*get*/}
        <Route path='/book/Create' element={<CreatePage />}/>
        <Route path='/book/show/:id' element={<ShowPage />}/>
        <Route path='/book/update/:id' element={<UpdatePage />}/>
        <Route path='/book/delete/:id' element={<DeletePage />}/>
      </Routes>
    </div>
  )
}

export default App