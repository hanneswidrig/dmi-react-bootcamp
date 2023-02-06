import { useState } from "react";
import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import type { CartItem } from "./hooks/useCart";

export function Root() {
	const [cart, setCart] = useState<CartItem[]>([]);
	return (
		<div className="my-0 mx-auto flex max-w-7xl flex-col p-8">
			<Header cart={cart} />
			<Outlet context={{ cart, setCart }} />
			<Footer />
		</div>
	);
}
