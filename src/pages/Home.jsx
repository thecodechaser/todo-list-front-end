import Welcome from "../components/Home/Welcome";

const Home = () => {
  return (
    <div className="flex justify-center mt-32">
      <div className="flex flex-col shadow-md m-5 md:w-1/2 shadow-primaryColor p-10 gap-5">
        <Welcome/>
      </div>
    </div>
  );
};

export default Home;
