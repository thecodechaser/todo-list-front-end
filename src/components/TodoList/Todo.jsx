import {useState} from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { removeTodoApi } from "../../redux/todos/todos";
import { useDispatch } from 'react-redux';

const Todo = (props) => {
  const dispatch = useDispatch();
  const todo = props.todo;
  const [editTodo, setEditTodo] = useState(todo.task)
  const removeTodo = () => {
    dispatch(removeTodoApi(todo.id));
  };
  return (
    <input className="text-primaryColor focus:outline-primaryColor py-1 px-2"
     value={editTodo}
     onChange={(e) => setEditTodo(e.target.value)}
    />
  );
};

export default Todo;
