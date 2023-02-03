import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";

export type CartItem = {
	productId: string;
	price: number;
};

export function useCart() {
	return useOutletContext<{
		cart: CartItem[];
		setCart: Dispatch<SetStateAction<CartItem[]>>;
	}>();
}
