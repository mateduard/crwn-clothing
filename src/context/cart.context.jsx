import { createContext, useState } from 'react';

export const CartContext = createContext({
  isCartOpen: null,
  setIsCartOpen: () => null,
});

export const CartProvider = ({ children }) => {
  //   const [items, setItems] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
