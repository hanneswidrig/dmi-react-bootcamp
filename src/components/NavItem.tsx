import { NavLink } from "react-router-dom";

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
			<NavLink
				to={navItem.to}
				className="cursor-pointer rounded-md px-6 py-2 hover:bg-blue-100 aria-[current=page]:bg-blue-100 aria-[current=page]:text-blue-700">
				{navItem.label}
			</NavLink>
		</li>
	);
}
