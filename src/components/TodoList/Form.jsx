import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FaRegEdit } from "react-icons/fa";
import { addTodoApi } from '../../redux/todos/todos';

const Form = (props) => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();
  const setSuccessMsg = props.setSuccessMsg;
  const addTodo= (e) => {
    e.preventDefault();
    if (task === '') return;
    const newTodo = {
      task,
      completed: false
    };

    dispatch(addTodoApi(newTodo));
    setTask('');

    setSuccessMsg(true)
    setTimeout(() => {
    setSuccessMsg(false)
    }, 3000);
  }

  return (
    <div className="mb-5">
      <input
        required
        className="w-64 lg:w-80 py-1 px-2 border-2 rounded border-primaryColor focus:outline-none"
        type="text"
        placeholder="Task name..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
        maxLength="20"
      />
      <button
        className="ml-8 lg:ml-2 text-primaryColor font-semibold"
        type="submit" onClick={addTodo}
      >
        Add Task
        <FaRegEdit className="cursor-pointer inline ml-2 mb-1" />
      </button>
    </div>
  );
};

export default Form;
