import logo from '../assets/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="flex justify-between">
      <img className="w-56" src={logo} />
      <nav>
      <Link to="/">
        <a href="/">Home</a>
      </Link>
      <Link to="/todolist">
        <a href="/">TodoList</a>
      </Link>
      </nav>
    </header>
  )
}

export default Header;