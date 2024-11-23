import React, { useState } from 'react';
import axios from "axios"
import { message } from "antd";
import { Link, useNavigate } from 'react-router-dom';
import { API_URL } from '../../config';


const initialState = {
  Name: '',
  FatherName: '',
  Phone: '',
  Description: ''
};

const AddTodo = () => {
    const navigate = useNavigate()
    const [input, setInput] = useState(initialState);  

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
        const addTodo = await axios.post(`${API_URL}/api/addTodo`, input)
        // const response = addTodo.data; 
        message.success("A new todo has been successfully created")
        navigate('/')
    } catch (error) {
        console.log(error)
    } 
  };

  return (
    <main className="container mb-5">
      <div className="row text-center m-5">
        <div className="col"> 
          <h1>Dashboard Home || New Todo</h1>
          <h3>Create a new todo with: Name, location, date, description</h3>
        </div>
      </div>
      <div className="row border p-5 bg-light">
        <form className="col-12" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Name" 
              className="form-control" 
              name="Name" 
              required
              value={input.Name}
              onChange={handleChange} 
              />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Father's Name" 
              className="form-control" 
              required
              name="FatherName" 
              value={input.FatherName}
              onChange={handleChange} 
              />
          </div>
          <div className="mb-3">
            <input 
              type="text" 
              placeholder="Phone" 
              className="form-control" 
              name="Phone" 
              required
              value={input.Phone}
              onChange={handleChange} 
              />
          </div>
          <div className="mb-3">
            <textarea 
              placeholder="Description" 
              className="form-control"
              style={{resize: 'none'}} 
              name="Description" 
              required
              value={input.Description}
              onChange={handleChange} 
              cols="30" 
              rows="5"
            ></textarea>
          </div> 
          <div className="text-center">
            <button type="submit" className="btn btn-primary text-light w-100 fs-4">
              Add Todo
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default AddTodo;
