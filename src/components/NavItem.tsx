import { Link } from "react-router-dom";

export type NavigationItem = {
	to: string;
	label: string;
};

export interface NavItemProps {
	navItem: NavigationItem;
}

export function NavItem(props: NavItemProps) {
	const { navItem } = props;
	return (
		<li>
			<Link
				to={navItem.to}
				className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 hover:text-blue-700 active:bg-blue-100">
				{navItem.label}
			</Link>
		</li>
	);
}
