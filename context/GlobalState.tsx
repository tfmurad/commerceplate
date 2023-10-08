"use client";

import { ReactNode, createContext, useState } from "react";

// Define a common interface for product items
interface IProduct {
  id: number;
  name: string;
  image: string;
  currentPrice: number;
  previousPrice?: number;
}

// Define a common interface for the cart context
interface CartContextValue {
  cartItems: IProduct[];
  handleAddToCart: (item: IProduct) => void;
}

// Create a CartContext
export const CartContext = createContext<CartContextValue>({
  cartItems: [],
  handleAddToCart: () => { },
});

const GlobalState = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);

  function handleAddToCart(getCurrentItem: IProduct) {
    let copycartItems = [...cartItems];
    const indexOfCurrentItem = copycartItems.findIndex(
      (item) => item.id === getCurrentItem.id,
    );
    console.log(indexOfCurrentItem);
    console.log(indexOfCurrentItem);

    if (indexOfCurrentItem === -1) {
      copycartItems.push(getCurrentItem);
    }

    setCartItems(copycartItems);
  }

  return (
    <CartContext.Provider value={{ cartItems, handleAddToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default GlobalState;
