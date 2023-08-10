import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import { Main } from "./Routes";
import { CartProvider } from "../components/CartContext";
import Butchery from "../pages/Butchery";
import Bakery from "../pages/Bakery";
import Products from "../pages/Products";
import Hygiene from "../pages/Hygiene";
import Beverages from "../pages/Beverages";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/acougue" element={<Butchery />} />
            <Route path="/padaria" element={<Bakery />} />
            <Route path="/higiene" element={<Hygiene />} />
            <Route path="/bebidas" element={<Beverages />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
