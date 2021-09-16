import React from 'react';
import '../styles/components/Checkout.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import AppContext from '../context/AppContext';

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product, index) => {
    removeFromCart(product, index);
  };
  const handleSumTotal = () => {
    //reducer solo es una funcion que creamos
    //como en este ejemplo
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce
    const reducer = (acumulator, currentValue) =>
      acumulator + currentValue.price;

    const sum = cart.reduce(reducer, 0);
    return sum;
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? <h3>Lista de Pedidos</h3> : <h3>Sin pedidos</h3>}
        {cart.map((item, index) => (
          <div key={index} className="Checkout-item">
            <div className="Checkout-element">
              <h4>{item.title + ' ' + index}</h4>
              <span>{item.price}</span>
            </div>
            <button
              type="button"
              onClick={() => {
                handleRemove(item, index);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h1>Precio Total: {handleSumTotal()}</h1>
          <Link to="/checkout/information">
            <button type="button">Contintuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Checkout;
