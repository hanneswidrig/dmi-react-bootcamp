import { v4 } from "uuid";
import groupBy from "just-group-by";

import { CartItem, useCart } from "../hooks/useCart";
import { Product, productList } from "../mock-data/products";

function Item({ groupedItem }: { groupedItem: [productKey: string, items: CartItem[]] }) {
	const { setCart } = useCart();
	const [productKey, items] = groupedItem;
	const totalCost = items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);

	function increaseQuantity(matchedItem: Product) {
		setCart((prevItems) => {
			const addedItem: CartItem = {
				id: v4(),
				price: parseFloat(matchedItem.price),
				productKey: matchedItem.productKey,
			};

			return [...prevItems, addedItem];
		});
	}

	function decreaseQuantity(matchedItem: Product) {
		setCart((prevItems) => {
			const itemIndex = prevItems.findIndex((item) => item.productKey === matchedItem.productKey);
			return prevItems.filter((_, index) => index !== itemIndex);
		});
	}

	const matchedItem = productList.find((product) => product.productKey === productKey);
	if (matchedItem) {
		return (
			<div className="flex justify-between rounded-md border-2 border-gray-100 bg-gray-50 p-4 text-gray-800">
				<div className="flex w-full justify-between gap-4">
					<div className="flex gap-4">
						<img src={matchedItem.imgSrc} alt="product image" className="h-24 w-24 rounded-full" />
						<h1 className="text-2xl font-semibold">{matchedItem.name}</h1>
					</div>
					<div className="flex flex-col items-end justify-between">
						<h1 className="text-lg font-semibold">${totalCost}</h1>
						<div className="flex gap-2">
							<span className="px-2 py-1 text-sm font-medium text-gray-800">Qty: {items.length}</span>
							<button
								className="cursor-pointer select-none rounded-md bg-green-700 px-2 py-1 text-sm font-medium text-white shadow active:bg-green-800"
								onClick={() => increaseQuantity(matchedItem)}>
								Add
							</button>
							<button
								className="cursor-pointer select-none rounded-md bg-red-700 px-2 py-1 text-sm font-medium text-white shadow active:bg-red-800"
								onClick={() => decreaseQuantity(matchedItem)}>
								Remove
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}

	return null;
}

function CartSummary({ cart }: { cart: CartItem[] }) {
	const total = cart.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);
	return (
		<div className="flex justify-between rounded-md border-2 border-gray-100 bg-gray-50 p-4 text-gray-800">
			<h2 className="text-xl font-bold">Subtotal</h2>
			<span className="text-lg font-semibold">${total}</span>
		</div>
	);
}

export function Cart() {
	const { cart } = useCart();
	const groupedItems = groupBy(cart, ({ productKey }) => productKey);

	const cartItems = Object.entries(groupedItems).map((groupedItem) => (
		<Item key={groupedItem[0]} groupedItem={groupedItem} />
	));

	return (
		<div className="my-8 flex flex-col gap-4">
			<h1 className="text-3xl font-bold">Shopping Cart</h1>
			<div className="flex flex-col gap-4 lg:flex-row">
				<div className="flex basis-2/3 flex-col gap-4">{...cartItems}</div>
				<div className="flex basis-1/3 flex-col gap-4">
					<CartSummary cart={cart} />
				</div>
			</div>
		</div>
	);
}
