import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components/Header.css';
import AppContext from '../context/AppContext';

const Header = () => {
  const { state } = useContext(AppContext);
  const { cart } = state;

  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platzi conf Merch</h1>
      </Link>
      <div className="Header-checkout">
        <Link to="/checkout">
          <i className="fas fa-shopping-basket"></i>
          {cart.length > 0 && <div className="Header-alert">{cart.length}</div>}
        </Link>
      </div>
    </div>
  );
};

export default Header;
