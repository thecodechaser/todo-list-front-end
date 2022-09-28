import Welcome from "../components/Home/Welcome";
import { Link } from "react-router-dom";
import { FaRegCalendarCheck } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex justify-center mt-5 lg:mt-32">
      <div className="flex flex-col shadow-md m-5 md:w-1/2 shadow-primaryColor p-10 gap-5">
        <Welcome/>
        <div className="flex justify-center  mt-10">

        
        <Link to="/todolist">
                <a
                  className="text-lg font-semibold text-primaryColor border-2 p-2 rounded border-primaryColor"
                  href="/todolist"
                >
                  Goto TodoList< FaRegCalendarCheck className="cursor-pointer inline ml-2 mb-1"/>
                </a>
              </Link>
              </div>
      </div>
    </div>
  );
};

export default Home;
