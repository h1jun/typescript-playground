import React from "react";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { Products } from "./features/products/Products";
import { CartLink } from "./features/cart/CartLink";
import { Cart } from "./features/cart/Cart";
import styles from "./App.module.css";
import Home from "./components/Home/index";

function App() {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <header className={styles.header}>
          <nav>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
            <Link className={styles.navLink} to="/products">
              Products
            </Link>
            <CartLink />
          </nav>
        </header>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
