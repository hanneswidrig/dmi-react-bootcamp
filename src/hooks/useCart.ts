import { Dispatch, SetStateAction } from "react";
import { useOutletContext } from "react-router-dom";

export type CartItem = {
	id: string;
	productKey: string;
	price: number;
};

export function useCart() {
	return useOutletContext<{
		cart: Map<string, CartItem[]>;
		setCart: Dispatch<SetStateAction<CartItem[]>>;
	}>();
}
