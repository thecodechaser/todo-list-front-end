import { Routes, Route } from 'react-router';
import Home from './pages/Home';
import TodoList from './pages/TodoList';
import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
          <Route
            path="/"
            element={(<Home/>)}
          />
          <Route
            path="/todolist"
            element={(<TodoList/>)}
          />
          </Routes>
    </div>
  );
}

export default App;
