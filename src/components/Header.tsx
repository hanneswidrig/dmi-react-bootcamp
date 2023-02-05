import { Link, useNavigate } from "react-router-dom";

import type { CartItem } from "../hooks/useCart";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

interface HeaderProps {
	cart: CartItem[];
}

export function Header(props: HeaderProps) {
	const navigate = useNavigate();
	return (
		<header className="flex flex-col items-center">
			<div className="flex w-full items-center justify-between">
				<Link to="/" className="text-xl font-semibold">
					DMI Cafe
				</Link>
				<button
					type="button"
					className="inline-flex items-center rounded-md border-2 border-blue-100 bg-blue-50 px-6 py-1 text-blue-700 transition-shadow active:bg-blue-100"
					onClick={() => navigate("/cart")}>
					<span className="mr-1 text-2xl font-semibold">{props.cart.length}</span>
					<CartIcon className="h-6 w-6" />
				</button>
			</div>
			<ul className="flex gap-4 font-medium">
				<li>
					<Link
						to="/"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Featured
					</Link>
				</li>
				<li>
					<Link
						to="/browse/coffee"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Coffee
					</Link>
				</li>
				<li>
					<Link
						to="/browse/donuts"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Donuts
					</Link>
				</li>
				<li>
					<Link
						to="/browse/bagels"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Bagels
					</Link>
				</li>
				<li>
					<Link
						to="/browse/muffins"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Muffins
					</Link>
				</li>
				<li>
					<Link
						to="/browse/sandwiches"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
						Sandwiches
					</Link>
				</li>
			</ul>
		</header>
	);
}
