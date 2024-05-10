import React, { createContext, useState, useContext } from "react";
import type { ProviderProps } from "@/utils/Provider";
import { CartProductProps } from "@/components/Products/types";

interface CartContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItemToCart: (
    id: number,
    name: string,
    photo: string,
    price: string
  ) => void;
  removeItemToCart: (id: number, removeQuantity: boolean) => void;
  totalItems: () => number;
  totalPrice: () => number;
  cartItems: CartProductProps[];
}

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider: React.FC<ProviderProps> = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProductProps[]>([]);
  console.log("items", cartItems);
  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addItemToCart = (
    id: number,
    name: string,
    photo: string,
    price: string
  ) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedItem = increaseQuantity(existingItem);

      setCartItems((prevItems) =>
        prevItems.map((item) => (item.id === id ? updatedItem : item))
      );
    } else {
      setCartItems((prevItems) => [
        ...prevItems,
        {
          id,
          price: price,
          name: name,
          photo: photo,
          quantity: 1,
        } as CartProductProps,
      ]);
    }
    openCart();
  };

  const removeItemToCart = (id: number, removeQuantity: boolean) => {
    if (removeQuantity) {
      decreaseQuantity(id);
      return;
    }

    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id: number) => {
    const itemToDecrease = cartItems.find((item) => item.id === id);

    if (!itemToDecrease || itemToDecrease.quantity === 1) {
      return;
    }

    const newQuantity = itemToDecrease.quantity - 1;
    const totalPrice = parseFloat(itemToDecrease.price) / itemToDecrease.quantity;

    const updatedItem = {
      ...itemToDecrease,
      quantity: newQuantity,
      price: totalPrice.toString(),
    };

    setCartItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? updatedItem : item))
    );
  };

  const increaseQuantity = (item: CartProductProps) => {
    const totalPrice = parseFloat(item.price) * (item.quantity + 1);

    return {
      ...item,
      quantity: item.quantity + 1,
      price: totalPrice.toString(),
    };
  };

  const totalItems = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((acc, item) => acc + item.quantity, 0);
  };

  const totalPrice = () => {
    if (!cartItems || cartItems.length === 0) {
      return 0;
    }

    return cartItems.reduce((acc, item) => acc + Number(item.price), 0);
  };

  const contextValue: CartContextType = {
    isCartOpen,
    openCart,
    closeCart,
    cartItems,
    addItemToCart,
    removeItemToCart,
    totalItems,
    totalPrice,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export default CartProvider;

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
