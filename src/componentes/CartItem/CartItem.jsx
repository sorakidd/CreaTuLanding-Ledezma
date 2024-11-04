import React from 'react';
import Item from '../Item/Item'; // Importa el componente Item
import './CartItem.css';

const CartItem = ({ item, cantidad }) => {
  // Calcula el subtotal del item
  const subtotal = item.price * cantidad;

  return (
    <div className="CartItem">
      <Item 
        id={item.id} 
        name={item.name} 
        img={item.img} 
        price={item.price} 
        stock={item.stock} 
      />
      {/* Muestra la cantidad y el subtotal */}
      <div className="CartItem-Cantidad">Cantidad: {cantidad}</div>
      <div className="CartItem-Subtotal">Subtotal: ${subtotal}</div>
      {/* Añade aquí botones para aumentar/disminuir la cantidad */}
    </div>
  );
};

export default CartItem;