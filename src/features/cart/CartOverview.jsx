import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {  getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import {formatCurrency} from '../../utilis/helpers';


function CartOverview() {
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return null;

  return (
    <div className="flex items-center justify-between bg-stone-900 text-stone-200 uppercase px-4 py-4 sm:px-6 font-semibold text-sm md:text-base"> 
      <p className="text-stone-300 space-x-4 sm:space-x-6">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(totalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
