import { useParams } from "react-router-dom";

import { useCart } from "../useCart";
import { productList } from "../mock-data/products";

export function ProductDetail() {
	const { setCart } = useCart();
	const { productId = "" } = useParams<{ productId: string }>();

	const matchingProduct = productList.find(({ id }) => id === productId);

	return (
		<div className="flex">
			<h1>{matchingProduct?.name}</h1>
			<h1>{matchingProduct?.price}</h1>
			<img src={matchingProduct?.imgSrc} alt="product image" />
			<button
				className="rounded-md bg-red-50 px-6 py-3 font-semibold text-red-700 active:bg-red-100"
				onClick={() => setCart((prev) => [...prev, { productId, price: 0 }])}
			>
				Add to Cart
			</button>
		</div>
	);
}
