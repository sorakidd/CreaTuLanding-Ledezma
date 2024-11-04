import cart from './assets/cart.png';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

  const CartWidget = ({ width = 25, height = 25 }) => {
    const { totalQuantity } = useContext(CartContext);
    return (
      <Link to="/cart" className="Cartwidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
        <img className="Carting" src={cart} alt="cart-widget" />
        {totalQuantity}
      </Link>
    );
  };
  
  export default CartWidget;