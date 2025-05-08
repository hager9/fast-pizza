import { useSelector } from "react-redux";
import CreateUser from "../features/user/CreateUser";
import Button from "./Button";

function Home() {
  const userName = useSelector(state=> state.user.userName);

  return (
    <div className="my-10 text-center px-4">
      <h1 className="font-bold text-xl mb-8 sm:text-2xl md:text-3xl">
        The best pizza.
        <br />
        <span className="text-rose-700">
        Straight out of the oven, straight to you.
        </span>
      </h1>
      {!userName ? <CreateUser/> : <Button type='primary' to='/menu'>Continue Ordering, {userName}</Button> }
      
    </div>
  );
}

export default Home;
