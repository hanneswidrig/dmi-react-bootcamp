import groupBy from "just-group-by";

import { productList } from "../mock-data/products";
import { CartItem, useCart } from "../hooks/useCart";

function Item({ groupedItem }: { groupedItem: [productKey: string, items: CartItem[]] }) {
	const [productKey, items] = groupedItem;
	const totalCost = items.reduce((prev, curr) => prev + curr.price, 0).toFixed(2);

	const matchedItem = productList.find((product) => product.productKey === productKey);
	if (matchedItem) {
		return (
			<div className="flex w-full justify-between rounded-md border-2 border-blue-100 bg-gray-50 text-gray-800">
				<div className="m-4 flex w-full justify-between gap-4">
					<div className="flex gap-4">
						<img src={matchedItem.imgSrc} alt="product image" className="h-24 w-24 rounded-full" />
						<h1 className="text-2xl font-semibold">{matchedItem.name}</h1>
					</div>
					<div className="flex flex-col items-end justify-between">
						<h1 className="text-lg font-semibold">${totalCost}</h1>
						<div className="flex gap-2">
							<span className="px-2 py-1 text-sm font-medium text-gray-800">Qty: {items.length}</span>
							<button className="cursor-pointer select-none rounded-md bg-green-700 px-2 py-1 text-sm font-medium text-white shadow active:bg-green-800">
								Add
							</button>
							<button className="cursor-pointer select-none rounded-md bg-red-700 px-2 py-1 text-sm font-medium text-white shadow active:bg-red-800">
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

export function Cart() {
	const { cart } = useCart();
	const groupedItems = groupBy(cart, ({ productKey }) => productKey);
	const cartItems = Object.entries(groupedItems).map((groupedItem) => <Item groupedItem={groupedItem} />);
	return (
		<div className="my-8 flex flex-col items-center gap-4">
			<h1 className="text-3xl font-bold">Shopping Cart</h1>
			{...cartItems}
		</div>
	);
}
