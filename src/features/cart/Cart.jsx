
import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';



function Cart() {
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch =  useDispatch();

  if(!cart.length) return <EmptyCart />

  return (
    <div className='py-2 px-4'>
      <LinkButton to='/menu'>&larr; Back to menu</LinkButton>

      <h2 className='pt-7 text-xl font-semibold'>Your cart, {username}</h2>
      <ul className='divide-y divide-stone-200 mt-3 border-b border-stone-200'>
      {cart.map(item=> <CartItem item={item} key={item.key} />)}
      </ul>
       
      <div  className='mt-6 space-x-2'>
        <Button type='primary' to="/order/new">Order pizzas</Button>
        
        <Button type='secondary' onClick={()=> dispatch(clearCart())}>Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
