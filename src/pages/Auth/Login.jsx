import React, { useEffect, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom'; 
import { post } from '../../../services/apiEndPoint';
import { useAuthContext } from '../../../context/AuthContext';
import { message } from 'antd';


const initialState = { email: '', password: ''}

const Login = () => {
  const navigate = useNavigate()
  const [input, setinput] = useState(initialState);
  const { token, setToken, setUser } = useAuthContext() || {};
  const handleChange = (e)=> setinput((s)=> ({...s, [e.target.name]: e.target.value}))
  
  useEffect(()=>{
    if(token){
      navigate("/")
    }
  }, [token,navigate ])
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const loginUser = await post('/login', input);
      const response = loginUser.data;
      console.log(response);
      console.log(response.data.token);
      localStorage.setItem('token', JSON.stringify(response.data.token))
      localStorage.setItem('user', JSON.stringify(response.data.user))
      setToken(response.data.token)
      setUser(response.data.user)
      message.success("User logged in successfully")
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <section className="vh-100 bg-image"
      style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example3cg">Your Email</label>
                      <input
                        type="email" 
                        required
                        name="email"
                        className="form-control form-control-lg"
                        value={input.email}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-outline mb-4">
                      <label className="form-label" htmlFor="form3Example4cg">Password</label>
                      <input
                        type="password" 
                        name="password"
                        required
                        className="form-control form-control-lg"
                        value={input.password}
                        onChange={handleChange}
                      />
                    </div>  
                    <div className="d-flex justify-content-center">
                      <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">
                        Login
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">Don't have an account? <Link to="/auth/register"
                      className="fw-bold text-body"><u>register here</u></Link></p>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
