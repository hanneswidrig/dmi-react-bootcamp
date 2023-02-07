import { Link, useNavigate } from "react-router-dom";

import type { CartItem } from "../hooks/useCart";
import { NavItem, type NavigationItem } from "./NavItem";
import { ReactComponent as CartIcon } from "../assets/cart.svg";

const navigationItems: NavigationItem[] = [
	{ to: "/", label: "Featured" },
	{ to: "/browse/coffee", label: "Coffee" },
	{ to: "/browse/donuts", label: "Donuts" },
	{ to: "/browse/bagels", label: "Bagels" },
	{ to: "/browse/muffins", label: "Muffins" },
	{ to: "/browse/sandwiches", label: "Sandwiches" },
];

interface HeaderProps {
	cart: CartItem[];
}

export function Header(props: HeaderProps) {
	const navigate = useNavigate();
	const navItems = navigationItems.map((navItem) => <NavItem key={navItem.to} navItem={navItem} />);
	return (
		<header className="flex flex-col items-center gap-4">
			<div className="flex w-full items-center justify-between">
				<Link to="/" className="text-xl font-semibold">
					DMI Cafe
				</Link>
				<button
					type="button"
					className="inline-flex items-center rounded-md bg-blue-100 px-6 py-1 text-blue-700 transition-shadow"
					onClick={() => navigate("/cart")}>
					<span className="mr-1 text-2xl font-semibold">{props.cart.length}</span>
					<CartIcon className="h-6 w-6" />
				</button>
			</div>
			<ul className="flex flex-col gap-4 font-medium lg:flex-row">{...navItems}</ul>
		</header>
	);
}
