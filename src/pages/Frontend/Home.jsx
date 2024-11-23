import axios from 'axios'
import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import './home.css' 
import { API_URL } from '../../config'

const Home = () => {
  const [showTodos, setShowTodos] = useState([])

  const showTodo = async()=>{
    try {
      const getTodos = await axios.get(`${API_URL}/api/getTodo`);
      const response = getTodos.data; 
      setShowTodos(response.todo)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    showTodo()
  }, [])

  return (
    <main>
      <div className="todos container mt-5 mb-5">
        <h1 className='text-center mb-4'>Welcome To Todos</h1>
        <div className="table-responsive">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Father Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Description</th>
                <th scope="col">Date Created</th>
                <th scope="col">Date Updated</th>
              </tr>
            </thead>
            <tbody>
              {
                showTodos.map((todo, index) => (
                  <tr key={index}>
                    <th scope="row">{index+1}</th>
                    <td>{todo.Name}</td>
                    <td>{todo.FatherName}</td>
                    <td>{todo.Phone}</td>
                    <td>{todo.Description}</td>
                    <td>{dayjs(todo.createdAt).format('MMMM D, YYYY h:mm A')}</td>
                    <td>{dayjs(todo.updatedAt).format('MMMM D, YYYY h:mm A')}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </main>
  )
}

export default Home
