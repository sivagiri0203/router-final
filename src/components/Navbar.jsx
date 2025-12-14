import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";


export default function Navbar() {
const { cart } = useCart();


return (
<nav className="bg-indigo-600 text-white px-6 py-4 flex justify-between">
<h1 className="text-xl font-bold">Fake Store</h1>
<div className="space-x-6">
<Link to="/">Products</Link>
<Link to="/cart">Cart ({cart.length})</Link>
</div>
</nav>
);
}