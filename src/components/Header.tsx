import { Link } from "react-router-dom";

export function Header() {
	return (
		<header className="flex flex-col items-center">
			<div className="flex w-full items-center justify-between">
				<Link to="/" className="text-xl font-semibold">
					DMI Swag Shop
				</Link>
				<div>Cart</div>
			</div>
			<ul className="flex gap-4 font-medium">
				<li>
					<Link
						to="/browse/men"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700"
					>
						Men
					</Link>
				</li>
				<li>
					<Link
						to="/browse/women"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700"
					>
						Women
					</Link>
				</li>
				<li>
					<Link
						to="/browse/kids"
						className="cursor-pointer rounded-md px-6 py-2 hover:bg-red-50 hover:text-red-700"
					>
						Kids
					</Link>
				</li>
			</ul>
		</header>
	);
}
