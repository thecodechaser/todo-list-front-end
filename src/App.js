import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import TodoList from "./pages/TodoList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todolist" element={<TodoList />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
