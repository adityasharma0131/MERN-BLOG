import React from 'react'
import './App.css'
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'


import Home from './pages/Home'
import PostDetail from './pages/PostDetail'
import Register from './pages/Register'
import Login from './pages/Login'
import UserProfile from './pages/UserProfile'
import Authors from './pages/Authors'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import CategoryPost from './pages/CategoryPost'
import AuthorPosts from './pages/AutoPosts'
import Dashboard from './pages/Dashboard'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'


const App = () => {
  return (
    <BrowserRouter>
    <Header />

    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="posts/:id" element={<PostDetail/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="profile/:id" element={<UserProfile/>}/>
      <Route path="authors" element={<Authors/>}/>
      <Route path="create" element={<CreatePost/>}/>
      <Route path="posts/:id/edit" element={<EditPost/>}/>
      <Route path="posts/categories/:category" element={<CategoryPost/>}/>
      <Route path="posts/users/:id" element={<AuthorPosts/>}/>
      <Route path="myposts/:id" element={<Dashboard/>}/>
      <Route path="logout" element={<Logout/>}/>
      <Route path="*" element={<ErrorPage/>}/>

      
    </Routes>

    <Footer />
    </BrowserRouter>
    
  )
}

export default App