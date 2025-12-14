import { useCart } from "../context/CartContext";


export default function ProductCard({ product }) {
const { cart, addToCart, removeFromCart } = useCart();
const inCart = cart.find((item) => item.id === product.id);


return (
<div className="border rounded-lg p-4 shadow hover:shadow-lg">
<img src={product.image} className="h-40 mx-auto" />
<h2 className="font-semibold mt-2">{product.title}</h2>
<p className="text-sm text-gray-600 line-clamp-2">{product.description}</p>
<p className="font-bold mt-2">₹{product.price}</p>


{inCart ? (
<button
onClick={() => removeFromCart(product.id)}
className="bg-red-500 text-white px-4 py-2 mt-3 rounded"
>
Remove from Cart
</button>
) : (
<button
onClick={() => addToCart(product)}
className="bg-green-500 text-white px-4 py-2 mt-3 rounded"
>
Add to Cart
</button>
)}
</div>
);
}