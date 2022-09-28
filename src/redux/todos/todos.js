// actions
const ADD_TODO = 'todolist/todos/ADD_TODO';
const REMOVE_TODO = 'todolist/todos/REMOVE_TODO';
const FETCH_TODO = 'todolist/todos/FETCH_TODO';

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