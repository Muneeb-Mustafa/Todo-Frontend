import axios from 'axios';
import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import EditTodo from '../../components/EditTodo.jsx/EditTodo';
import { message } from 'antd';
import { API_URL } from '../../config';

const Home = () => {
  const [showTodos, setShowTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [todoData, setTodoData] = useState({});

  const showTodo = async () => {
    try {
      const getTodos = await axios.get(`${API_URL}/api/getTodo`);
      const response = getTodos.data;
      setShowTodos(response.todo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    showTodo();
  }, []);

  const editTodos = (todo) => {
    setShowModal(true);
    setTodoData(todo);
  };

  const handleDelete = async (todo) => {
    try {
      await axios.delete(`${API_URL}/api/deleteTodo/${todo._id}`);
      const response = await axios.get(`${API_URL}/api/getTodo`);
      const updatedTodos = response.data.todo;
      setShowTodos(updatedTodos);
      message.success('Todo deleted successfully');
    } catch (error) {
      console.error('Error deleting todo:', error);
      message.error('Error deleting todo');
    }
  };

  return (
    <main>
      <div className="todos container mt-5">
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
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {showTodos.map((todo, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{todo ? todo.Name : 'N/A'}</td>
                  <td>{todo ? todo.FatherName : 'N/A'}</td>
                  <td>{todo ? todo.Phone : 'N/A'}</td>
                  <td>{todo ? todo.Description : 'N/A'}</td>
                  <td>{todo ? dayjs(todo.createdAt).format('MMMM D, YYYY h:mm A') : 'N/A'}</td>
                  <td>{todo ? dayjs(todo.updatedAt).format('MMMM D, YYYY h:mm A') : 'N/A'}</td>
                  <td className="actions">
                    <button
                      className="btn btn-warning"style={{marginRight: "10px"}}
                      onClick={() => editTodos(todo)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(todo)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {todoData && Object.keys(todoData).length > 0 && (
        <EditTodo
          showModal={showModal}
          setShowModal={setShowModal}
          todoData={todoData}
          setShowTodos={setShowTodos}
          showTodos={showTodos}
        />
      )}
    </main>
  );
};

export default Home;
