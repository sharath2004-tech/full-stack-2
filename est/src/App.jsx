import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useCartContext } from './context/CartContext'
import { products } from './data/products'
import {
  addToCart as addToCartRedux,
  clearCart as clearCartRedux,
  decrementQty as decrementQtyRedux,
  incrementQty as incrementQtyRedux,
  removeFromCart as removeFromCartRedux,
} from './redux/cartSlice'

function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

function App() {
  const [mode, setMode] = useState('context')

  const contextCart = useCartContext()
  const dispatch = useDispatch()
  const reduxCartItems = useSelector((state) => state.cart.cartItems)

  const state = useMemo(() => {
    if (mode === 'context') {
      return {
        cartItems: contextCart.cartItems,
        addToCart: contextCart.addToCart,
        incrementQty: contextCart.incrementQty,
        decrementQty: contextCart.decrementQty,
        removeFromCart: contextCart.removeFromCart,
        clearCart: contextCart.clearCart,
      }
    }

    return {
      cartItems: reduxCartItems,
      addToCart: (product) => dispatch(addToCartRedux(product)),
      incrementQty: (productId) => dispatch(incrementQtyRedux(productId)),
      decrementQty: (productId) => dispatch(decrementQtyRedux(productId)),
      removeFromCart: (productId) => dispatch(removeFromCartRedux(productId)),
      clearCart: () => dispatch(clearCartRedux()),
    }
  }, [contextCart, dispatch, mode, reduxCartItems])

  const cartTotal = state.cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  )

  const cartCount = state.cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <main className="app-shell">
      <header className="top-bar">
        <div>
          <h1>Shopping Cart Demo</h1>
          <p>Compare Context API and Redux state management in one app.</p>
        </div>
        <div className="mode-switch" role="group" aria-label="State manager mode">
          <button
            type="button"
            className={mode === 'context' ? 'active' : ''}
            onClick={() => setMode('context')}
          >
            Context API
          </button>
          <button
            type="button"
            className={mode === 'redux' ? 'active' : ''}
            onClick={() => setMode('redux')}
          >
            Redux
          </button>
        </div>
      </header>

      <section className="meta">
        <span>
          Active mode: <strong>{mode === 'context' ? 'Context API' : 'Redux Toolkit'}</strong>
        </span>
        <span>
          Cart items: <strong>{cartCount}</strong>
        </span>
        <span>
          Total: <strong>{formatCurrency(cartTotal)}</strong>
        </span>
      </section>

      <section className="content-grid">
        <div className="products-card">
          <h2>Products</h2>
          <div className="products-grid">
            {products.map((product) => (
              <article key={product.id} className="product-item">
                <h3>{product.name}</h3>
                <p>{formatCurrency(product.price)}</p>
                <button type="button" onClick={() => state.addToCart(product)}>
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        </div>

        <aside className="cart-card">
          <div className="cart-header">
            <h2>Your Cart</h2>
            <button
              type="button"
              onClick={state.clearCart}
              disabled={state.cartItems.length === 0}
            >
              Clear Cart
            </button>
          </div>

          {state.cartItems.length === 0 ? (
            <p className="empty">Your cart is empty. Add a few goodies ✨</p>
          ) : (
            <ul className="cart-list">
              {state.cartItems.map((item) => (
                <li key={item.id}>
                  <div>
                    <h4>{item.name}</h4>
                    <small>{formatCurrency(item.price)} each</small>
                  </div>
                  <div className="quantity-controls">
                    <button type="button" onClick={() => state.decrementQty(item.id)}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => state.incrementQty(item.id)}>
                      +
                    </button>
                  </div>
                  <div className="item-total">{formatCurrency(item.quantity * item.price)}</div>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => state.removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </aside>
      </section>
    </main>
  )
}

export default App
