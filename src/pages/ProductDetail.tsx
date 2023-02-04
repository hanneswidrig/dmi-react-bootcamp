import { v4 } from "uuid";
import { useParams } from "react-router-dom";

import { useCart } from "../hooks/useCart";
import { Product, productList } from "../mock-data/products";

function AddToCart({ product }: { product: Product }) {
	const { setCart } = useCart();

	function addToCart(product: Product) {
		const nextItem = {
			id: v4(),
			productKey: product.productKey,
			price: parseFloat(product.price),
		};

		setCart((prevItems) => [...prevItems, nextItem]);
	}

	return (
		<button
			className="rounded-md bg-blue-100 px-6 py-3 font-semibold text-blue-700 active:bg-blue-200"
			onClick={() => addToCart(product)}>
			Add to Cart
		</button>
	);
}

export function ProductDetail() {
	const { productKey = "" } = useParams<{ productKey: string }>();

	const matchedProduct = productList.find((product) => product.productKey === productKey);
	if (matchedProduct) {
		return (
			<div className="my-8 flex flex-col items-center">
				<img src={matchedProduct.imgSrc} alt="product image" className="h-96 w-96 rounded-full" />
				<div className="my-8 flex flex-col">
					<h1 className="text-3xl font-bold">{matchedProduct.name}</h1>
					<h2 className="text-xl font-semibold">${matchedProduct.price}</h2>
				</div>
				<AddToCart product={matchedProduct} />
			</div>
		);
	}

	return null;
}
