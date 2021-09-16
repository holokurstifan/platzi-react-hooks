import React, { useContext } from 'react';
import '../styles/components/Payment.css';
import AppContext from '../context/AppContext';

const Payment = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido</h3>
        {cart.map((item, index) => (
          <div className="Payment-Item" key={index}>
            <div className="Payment-element">
              <h4>{item.title}</h4>
              <span>$ {' ' + item.price}</span>
            </div>
          </div>
        ))}

        <div className="Payment-button">Button de pago con Paypal</div>
      </div>
      <div></div>
    </div>
  );
};

export default Payment;
