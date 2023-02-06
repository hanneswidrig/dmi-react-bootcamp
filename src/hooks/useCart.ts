import { useOutletContext } from "react-router-dom";
import type { Dispatch, SetStateAction } from "react";

export type CartItem = {
	id: string;
	productKey: string;
	price: number;
};

export function useCart() {
	return useOutletContext<{
		cart: CartItem[];
		setCart: Dispatch<SetStateAction<CartItem[]>>;
	}>();
}
