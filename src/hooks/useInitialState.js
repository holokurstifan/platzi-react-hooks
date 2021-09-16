import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };
  const removeFromCart = (payload, index) => {
    /*const newArray = { ...state };
    console.log('old Array', newArray.cart);
    newArray.cart.splice(index, 1);
    console.log('New Array', newArray.cart);*/
    setState({
      ...state,
      cart: state.cart.filter((_, i) => i !== index),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  return {
    addToCart,
    removeFromCart,
    state,
    addToBuyer,
  };
};

export default useInitialState;
