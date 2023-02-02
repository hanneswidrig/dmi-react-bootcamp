import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="flex flex-col items-center">
			<div className="flex w-full items-center justify-between">
				<Link to="/" className="text-xl font-semibold">
					DMI Cafe
				</Link>
				<div>Cart</div>
			</div>
			<ul className="flex gap-4 font-medium">
				<li>
					<Link
						to="/"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Featured
					</Link>
				</li>
				<li>
					<Link
						to="/browse/coffee"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Coffee
					</Link>
				</li>
				<li>
					<Link
						to="/browse/donuts"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Donuts
					</Link>
				</li>
				<li>
					<Link
						to="/browse/bagels"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Bagels
					</Link>
				</li>
				<li>
					<Link
						to="/browse/muffins"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Muffins
					</Link>
				</li>
				<li>
					<Link
						to="/browse/sandwiches"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700 active:bg-red-100"
					>
						Sandwiches
					</Link>
				</li>
			</ul>
		</header>
	);
}
