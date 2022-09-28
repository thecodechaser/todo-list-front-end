const Form = () => {
  return (
    <div>
       <input
        required
        className="w-64 lg:w-72"
        type="text"
        placeholder="Task name..."
        // value={title}
        // onChange={(e) => setTask(e.target.value)}
        maxLength="20"
      />
      <button className="ml-8 lg:ml-12 text-primaryColor font-semibold" type="submit">Add Task</button>
    </div>
  )
}

export default Form;