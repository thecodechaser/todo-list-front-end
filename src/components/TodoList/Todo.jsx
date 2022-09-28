import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { AiTwotoneTool } from "react-icons/ai";
import { removeTodoApi, updateTodoApi } from "../../redux/todos/todos";
import { useDispatch } from "react-redux";

const Todo = (props) => {
  const dispatch = useDispatch();
  const todo = props.todo;
  const setDeleteMsg = props.setDeleteMsg;
  const setUpdateMsg = props.setUpdateMsg;
  const [editTodo, setEditTodo] = useState(todo.task);
  const removeTodo = () => {
    dispatch(removeTodoApi(todo.id));
    setDeleteMsg(true);
    setTimeout(() => {
      setDeleteMsg(false);
    }, 3000);
  };

  const updateTodo = () => {
    dispatch(updateTodoApi(todo.id, editTodo));
    setUpdateMsg(true);
    setTimeout(() => {
      setUpdateMsg(false);
    }, 3000);
  };

  return (
    <div className="flex">
      <input
        className="text-primaryColor w-64 lg:w-80 focus:outline-primaryColor py-1 px-2"
        value={editTodo}
        onChange={(e) => setEditTodo(e.target.value)}
      />
      <AiTwotoneTool
        onClick={updateTodo}
        className="text-primaryColor text-xl cursor-pointer inline ml-4 mt-1 lg:ml-16"
      />
      <FaRegTrashAlt
        onClick={removeTodo}
        className="text-primaryColor cursor-pointer inline ml-2 mt-1 lg:ml-6"
      />
    </div>
  );
};

export default Todo;
