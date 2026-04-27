import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const existing = state.cartItems.find((item) => item.id === product.id)

      if (existing) {
        existing.quantity += 1
      } else {
        state.cartItems.push({ ...product, quantity: 1 })
      }
    },
    incrementQty: (state, action) => {
      const productId = action.payload
      const item = state.cartItems.find((entry) => entry.id === productId)
      if (item) item.quantity += 1
    },
    decrementQty: (state, action) => {
      const productId = action.payload
      const item = state.cartItems.find((entry) => entry.id === productId)

      if (!item) return

      item.quantity -= 1
      state.cartItems = state.cartItems.filter((entry) => entry.quantity > 0)
    },
    removeFromCart: (state, action) => {
      const productId = action.payload
      state.cartItems = state.cartItems.filter((item) => item.id !== productId)
    },
    clearCart: (state) => {
      state.cartItems = []
    },
  },
})

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
