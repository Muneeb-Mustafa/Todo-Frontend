import React from 'react'
import { Link, useNavigate } from 'react-router-dom' 
import "./header.css"
import { useAuthContext } from '../../../context/AuthContext';


const Header = () => {
  const  navigate  = useNavigate(); 
  const {token, logout, user} = useAuthContext()

  const handleLogout = () => {
    logout(); // Clear the token and user info
    navigate('/auth/login'); // Redirect to the login page
  };

  return (
    <nav class="navbar navbar-expand-lg bg-primary">
  <div class="container">
    <Link to="/" class="navbar-brand navbar-dark fs-2" >Todo App</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link to='/' class="nav-link active text-light" aria-current="page">Home</Link>
        </li>
        <li class="nav-item">
          <Link to='/addTodo' class="nav-link active text-light" aria-current="page">Add Todo</Link>
        </li>
        <li class="nav-item">
          <Link to='/dashboard' class="nav-link active text-light" aria-current="page">Dashboard</Link>
        </li> 
      </ul>
 
      {token ? (
            <button className="btn btn-danger" type="button" onClick={handleLogout}>Logout</button>
          ) : (
            <Link to="/auth/login">
              <button className="btn btn-success" type="button">Login</button>
            </Link>
          )} 
          
          <div className="username mt-3 text-light" style={{paddingLeft: "10px"}}>
          {
            user && <p>{user.name}</p>
          }
          </div>
      
    </div>
  </div>
</nav>
  )
}

export default Header
