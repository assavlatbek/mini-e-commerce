import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { products } from './data/products';
import Cart from './components/Cart';
import Favorites from './components/Favorites';
import ProductList from './components/ProductList';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const storedFavorites = JSON.parse(localStorage.getItem('favoriteProducts')) || [];
    setCartItems(storedCartItems);
    setFavoriteProducts(storedFavorites);
  }, []);

  const addToCart = (productId, quantity) => {
    const productToAdd = products.find((product) => product.id === productId);
    if (productToAdd) {
      const existingCartItem = cartItems.find((item) => item.id === productId);
      if (existingCartItem) {
        // If the item is already in the cart, update its quantity
        const updatedCart = cartItems.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        );
        setCartItems(updatedCart);
        localStorage.setItem('cartItems', JSON.stringify(updatedCart));
      } else {
        // If it's a new item, add it to the cart with the given quantity
        setCartItems([...cartItems, { ...productToAdd, quantity }]);
        localStorage.setItem(
          'cartItems',
          JSON.stringify([...cartItems, { ...productToAdd, quantity }])
        );
      }
    }
  };
  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart));
  };

  const toggleFavorite = (productId) => {
    if (favoriteProducts.includes(productId)) {
      const updatedFavorites = favoriteProducts.filter((id) => id !== productId);
      setFavoriteProducts(updatedFavorites);
    } else {
      setFavoriteProducts([...favoriteProducts, productId]);
    }
    localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  };


  return (
    <>
      <header className='bg-light py-3 fixed-top shadow'>
        <nav className='container d-flex justify-content-between'>
          <a className='nav-link fs-5' href='/'>Home</a>
          <a className='nav-link fs-5' href='/cart'>Cart</a>
          <a className='nav-link fs-5' href='/favorites'>Favorites</a>
        </nav>
      </header>
      <div style={{ marginBottom: '70px' }}></div>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" element={<ProductList
              products={products}
              addToCart={addToCart}
              toggleFavorite={toggleFavorite}
            />} />
            <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} quantity={cartItems.quantity} />} />
            <Route path="/favorites" element={<Favorites
              favoriteProducts={favoriteProducts}
              products={products}
              toggleFavorite={toggleFavorite}
            />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
