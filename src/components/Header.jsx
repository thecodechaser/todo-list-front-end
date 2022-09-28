import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  const menu = [
    { id: 1, name: "Home", path: "/" },
    { id: 1, name: "TodoList", path: "/todolist" },
  ];

  return (
    <header className="flex justify-between px-20 py-5 shadow-xl w-full">
      <img className="w-56" src={logo} />
      <nav>
        <ul className="flex gap-2">
          {menu.map((item) => (
            <li key={item.id}>
              <Link to={item.path}>
                <a
                  className="text-lg font-semibold text-primaryColor"
                  href={item.path}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
