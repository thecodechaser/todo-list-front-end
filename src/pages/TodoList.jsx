import React, { useEffect, useState } from 'react';
import Todo from "../components/TodoList/Todo";
import Form from "../components/TodoList/Form";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoApi } from "../redux/todos/todos";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer);
  const [successMsg, setSuccessMsg] = useState(false);
  const [deleteMsg, setDeleteMsg] = useState(false);
  const [updateMsg, setUpdateMsg] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoApi());
  }, [dispatch]);
  return (
    <>
    <div className="flex justify-center mt-32">
      <div className="flex flex-col shadow-md md:w-1/3 shadow-primaryColor p-10 gap-5">
        <Form setSuccessMsg={setSuccessMsg}/>
        {todos.map((todo, index) => (
          <Todo setDeleteMsg={setDeleteMsg} setUpdateMsg={setUpdateMsg} key={todo.id} index={index} todo={todo}/>
        ))}
      </div>
    </div>

    {successMsg && <p className="text-center mt-5 text-lg font-semibold text-primaryColor">Task added sucessfully!</p>}
    {deleteMsg && <p className="text-center mt-5 text-lg font-semibold text-primaryColor">Task deleted sucessfully!</p>}
    {updateMsg && <p className="text-center mt-5 text-lg font-semibold text-primaryColor">Task updated sucessfully!</p>}
    </>
  );
};

export default TodoList;
