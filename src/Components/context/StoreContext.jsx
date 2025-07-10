import { createContext, useState } from "react";
import { food_list } from "../../assets/assets";

export const storeContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = import.meta.env.REACT_APP_URL || "http://localhost:4000";
  // addToCart logic
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const addToCart = (itemId) => {
    // jo cart ma item no hoy tyare execute thay
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      // jo cart ma order ni value vathar vi hoy tyre execute thay
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };
  const removeFromCart = (itemId) => {
    // cart mathi order remove karvo hoy tyare execute thay
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item]) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };
  const contextValue = {
    food_list,
    addToCart,
    removeFromCart,
    setCartItems,
    cartItems,
    getCartTotalAmount,
    token,
    setToken,
    url,
  };
  return (
    <storeContext.Provider value={contextValue}>
      {props.children}
    </storeContext.Provider>
  );
};
export default StoreContextProvider;
