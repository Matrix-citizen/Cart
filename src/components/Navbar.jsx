import { CartIcon } from '../icons';
import { useSelector } from 'react-redux';

const Navbar = () => {
  // "useSelector" access our entire store
  const amount = useSelector((store) => store.cart.amount);
  // 2 Way, destructuring. The line below equals above one
  // const { amount } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className='nav-center'>
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className='total-amount'>{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Navbar