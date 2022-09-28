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
    <div className="flex">
    <input className="text-primaryColor w-64 lg:w-80 focus:outline-primaryColor py-1 px-2"
     value={editTodo}
     onChange={(e) => setEditTodo(e.target.value)}
    />
    <FaRegTrashAlt onClick={removeTodo} className="text-primaryColor cursor-pointer inline ml-6 lg:ml-20" />
    </div>
  );
};

export default Todo;
