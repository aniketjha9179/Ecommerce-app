import { createSlice } from "@reduxjs/toolkit";

export const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // if item is present already in cart then add quantity
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      // if item is present already in cart then add quantity
      if (itemPresent) {
        itemPresent.quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    // remove from cart
    removeFromCart: (state, action) => {
      const removeItem = state.cart.filter(
        (item) => item.id !== action.payload.id
      );
      state.cart = removeItem;
    },
    // third reducer
    increamentQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      itemPresent.quantity++;
    },
    decreamentQuantity: (state, action) => {
      const itemPresent = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (itemPresent.quantity === 1) {
        itemPresent.quantity = 0;
        // remove from cart functionality
        const removeItem = state.cart.filter(
          (item) => item.id !== action.payload.id
        );
        state.cart = removeItem;
      }
      else{
        itemPresent.quantity--;

      }
    },
    // after doing all the payment clean cart 
    cleanCart:(state)=>{
        state.cart=[];
    }
  },
});


export const {addToCart, removeFromCart,increamentQuantity,decreamentQuantity,cleanCart}=CartSlice.actions;

export default CartSlice.reducer