import React, { useEffect } from 'react';
import Todo from "../components/TodoList/Todo";
import Form from "../components/TodoList/Form";
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodoApi } from "../redux/todos/todos";

const TodoList = () => {
  const todos = useSelector((state) => state.todoReducer);
  console.log(todos)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchTodoApi());
  }, [dispatch]);
  return (
    <div className="flex justify-center mt-32">
      <div className="flex flex-col shadow-md md:w-1/3 shadow-primaryColor p-10 gap-5">
        <Form />
        {todos.map((todo) => (
          <Todo todo={todo}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
