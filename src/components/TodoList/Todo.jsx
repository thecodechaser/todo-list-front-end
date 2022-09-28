import { FaRegTrashAlt } from "react-icons/fa";

const Todo = (props) => {
  const todo = props.todo;
  return (
    <p className="text-primaryColor">
     {todo.task}
      <FaRegTrashAlt className="cursor-pointer inline ml-6 lg:ml-20" />
    </p>
  );
};

export default Todo;
