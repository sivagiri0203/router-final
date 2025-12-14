import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";


export default function App() {
return (
<CartProvider>
<Navbar />
<Routes>
<Route path="/" element={<Products />} />
<Route path="/cart" element={<Cart />} />
</Routes>
</CartProvider>
);
}