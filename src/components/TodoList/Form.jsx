import { FaRegEdit } from "react-icons/fa";

const Form = () => {
  return (
    <div className="mb-5">
      <input
        required
        className="w-64 lg:w-80 border-2 rounded border-primaryColor focus:outline-none"
        type="text"
        placeholder="Task name..."
        // value={title}
        // onChange={(e) => setTask(e.target.value)}
        maxLength="20"
      />
      <button
        className="ml-8 lg:ml-2 text-primaryColor font-semibold"
        type="submit"
      >
        Add Task
        <FaRegEdit className="cursor-pointer inline ml-2 mb-1" />
      </button>
    </div>
  );
};

export default Form;
