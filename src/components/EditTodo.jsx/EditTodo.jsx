import axios from "axios";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import {message} from 'antd'
import { API_URL } from "../../config";

const EditTodo = ({ showModal, setShowModal, todoData, setShowTodos, showTodos }) => { 
  const [input, setinput] = useState(todoData);

  useEffect(() => { 
    setinput(todoData); 
  }, [todoData]);
  

  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setinput({ ...input, [e.target.name]: e.target.value });
  };    
  
   const handleUpdate = async () => {
    try {
      const response = await axios.put(`${API_URL}/api/updateTodo/${todoData._id}`, input); 
      const updatedTodo = response.data.updatedTodo; 

      if (!updatedTodo) {
        throw new Error('No updated todo received');
      }
      const updatedTodos = showTodos.map((t) =>
        t._id === updatedTodo._id ? updatedTodo : t
      );
  
      setShowTodos(updatedTodos); // Update the state with the new todos
      setShowModal(false);
      message.success("Todo updated successfully");
    } catch (error) {
      console.error('Error updating todo:', error);
    }
  };
  
  return (
    <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Todo</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      {input && (
      <form>
        <div className="form-group mb-2">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="Name"
            value={input.Name || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="fathername">Father Name:</label>
          <input
            type="text"
            name="FatherName"
            value={input.FatherName || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="email">Phone:</label>
          <input
            type="Phone"
            name="phone"
            value={input.Phone || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="phone">Description:</label>
          <textarea
            type="Number"
            name="Description"
            style={{resize: 'none'}} 
            cols="30" 
            rows="3"
            value={input.Description || ''}
            className="form-control"
            onChange={handleChange}
          />
        </div>
      </form>
    )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModal}>
          Cancel
        </Button>
        <Button variant="success" onClick={handleUpdate}>
          Update Todo
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditTodo;
