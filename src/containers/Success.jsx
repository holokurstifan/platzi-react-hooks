import React from 'react';
import '../styles/components/Success.css';

const Success = () => {
  return (
    <div className="Success">
      <div className="success-content">
        <h2>Gracias por tu compora</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion</span>
        <div className="success-map">Google Maps</div>
      </div>
    </div>
  );
};

export default Success;
