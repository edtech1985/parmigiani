import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Home from "../pages/Home";
import Checkout from "../pages/Checkout";
import { Main } from "./Routes";
import { CartProvider } from "../components/CartContext";
import Butchery from "../pages/Butchery";
import { Bakery } from "../pages/Bakery";
import { Convenience } from "../pages/Convenience";

export default function AppRouter() {
  return (
    <Main>
      <Router>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/acougue" element={<Butchery />} />
            <Route path="/padaria" element={<Bakery />} />
            <Route path="/conveniencia" element={<Convenience />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />
        </CartProvider>
      </Router>
    </Main>
  );
}
