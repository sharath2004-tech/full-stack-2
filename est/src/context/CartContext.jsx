import { createContext, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

function upsertItem(items, product, delta = 1) {
  const existing = items.find((item) => item.id === product.id)

  if (existing) {
    return items
      .map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + delta } : item,
      )
      .filter((item) => item.quantity > 0)
  }

  return [...items, { ...product, quantity: Math.max(delta, 1) }]
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    setCartItems((prev) => upsertItem(prev, product, 1))
  }

  const incrementQty = (productId) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    )
  }

  const decrementQty = (productId) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId))
  }

  const clearCart = () => setCartItems([])

  const value = useMemo(
    () => ({
      cartItems,
      addToCart,
      incrementQty,
      decrementQty,
      removeFromCart,
      clearCart,
    }),
    [cartItems],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCartContext() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCartContext must be used inside CartProvider')
  }

  return context
}
