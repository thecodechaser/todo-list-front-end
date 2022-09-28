import { FaRegTrashAlt } from "react-icons/fa";
import { removeTodoApi } from "../../redux/todos/todos";
import { useDispatch } from 'react-redux';

const Todo = (props) => {
  const dispatch = useDispatch();
  const todo = props.todo;
  const removeTodo = () => {
    dispatch(removeTodoApi(todo.id));
  };
  return (
    <p className="text-primaryColor">
     {todo.task}
      <FaRegTrashAlt onClick={removeTodo} className="cursor-pointer inline ml-6 lg:ml-20" />
    </p>
  );
};

export default Todo;
