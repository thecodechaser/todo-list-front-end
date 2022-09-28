import Axios from 'axios';

// const
const BASEURL ="http://localhost:8080/api/todos"
const ADD_TODO = "todolist/todos/ADD_TODO";
const REMOVE_TODO = "todolist/todos/REMOVE_TODO";
const FETCH_TODO = "todolist/todos/FETCH_TODO";

// initial-state
const initialState = [];

// actions
const addTodo = (payload) => ({
  type: ADD_TODO,
  payload,
});

const removeTodo = (payload) => ({
  type: REMOVE_TODO,
  payload,
});

const fetchTodo = (payload) => ({
  type: FETCH_TODO,
  payload,
});

// api functions

export const addTodoApi = (task) => async (dispatch) => {
  const newTodo = { task: task, completed: false};
  await Axios.post(`${BASEURL}`, newTodo);
  const localTodo = {task: task, completed: false, id: initialState[initialState.length -1].id}
  dispatch(addBook(localTodo));
};

export const fetchTodoApi = () => async (dispatch) => {
  const todos = await Axios.get(`${BASEURL}`);
  dispatch(fetchTodo(todos.data));
};

export const removeTodoApi = (id) => async (dispatch) => {
  await Axios.delete(`${BASEURL}/${id}`);
  dispatch(removeTodo(id));
};

// recucer
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case FETCH_TODO:
      return action.payload;
    default:
      return state;
  }
};

export default todoReducer;
