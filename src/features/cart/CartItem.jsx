
import { formatCurrency } from "../../utilis/helpers";
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";
import {  useSelector } from "react-redux";
import { getCurrentQuantityById } from "../cart/cartSlice";


function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentQuantityById(pizzaId));
  
  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between items-center sm:gap-6 ">
        <p className="font-bold text-sm">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId}/>
      </div>
    </li>
  );
}

export default CartItem;
