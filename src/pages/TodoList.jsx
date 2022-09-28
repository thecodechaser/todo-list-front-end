import Todo from "../components/TodoList/Todo";
import Form from "../components/TodoList/Form";

const data = [1, 2, 3, 4, 5];
const TodoList = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="flex flex-col shadow-md md:w-1/3 shadow-primaryColor p-10 gap-5">
        <Form />
        {data.map(() => (
          <Todo />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
