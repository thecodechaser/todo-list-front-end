import Axios from "axios";
import { v4 as uuidv4 } from "uuid";

// const
const BASEURL = "http://localhost:8080/api/todos";
const ADD_TODO = "todolist/todos/ADD_TODO";
const REMOVE_TODO = "todolist/todos/REMOVE_TODO";
const FETCH_TODO = "todolist/todos/FETCH_TODO";
const UPDATE_TODO = "todolist/todos/UPDATE_TODO";

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

const updateTodo = (id, editTodo) => ({
  type: UPDATE_TODO,
  id,
  editTodo,
});

// api functions

export const addTodoApi = (todo) => async (dispatch) => {
  await Axios.post(`${BASEURL}`, todo);
  const localTodo = { task: todo.task, completed: false, id: uuidv4() };
  dispatch(addTodo(localTodo));
};

export const fetchTodoApi = () => async (dispatch) => {
  const todos = await Axios.get(`${BASEURL}`);
  dispatch(fetchTodo(todos.data));
};

export const removeTodoApi = (id) => async (dispatch) => {
  await Axios.delete(`${BASEURL}/${id}`);
  dispatch(removeTodo(id));
};

export const updateTodoApi = (id, editTodo) => async (dispatch) => {
  await Axios.put(`${BASEURL}/${id}`, { task: editTodo });
  dispatch(updateTodo(id, editTodo));
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
      case UPDATE_TODO: {
        const index = state.findIndex((todo) => todo.id === action.id);
        const newArray = [...state];
        newArray[index].task = action.editTodo;
        return newArray;
      }
    default:
      return state;
  }
};

export default todoReducer;
