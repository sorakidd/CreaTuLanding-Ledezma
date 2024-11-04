import './Cart.css'
import { useContext } from "react" 
import CartContext from '../context/CartContext'

import { Link , NavLink } from 'react-router-dom' 
import CartItem from '../CartItem/CartItem'


const Cart = () => {
  const [cart, clearCart, totalQuantity, total] = useContext(CartContext)

  if (totalQuantity === 0) {
    return (
      <div>
        <h2>No hay items en el carrito</h2>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    )
  }

  return (
    <div>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  )
}

export default Cart;