import { Link } from "react-router-dom";

export function Footer() {
	return (
		<footer className="flex items-center justify-between">
			<span className="text-sm text-gray-500">
				<div>© 2023 DMI Swag Shop™. All Rights Reserved.</div>
			</span>
			<ul className="mt-3 flex flex-wrap items-center text-sm text-gray-500">
				<li>
					<a href="#" className="mr-4 hover:underline">
						About
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline">
						Privacy Policy
					</a>
				</li>
				<li>
					<a href="#" className="mr-4 hover:underline">
						Licensing
					</a>
				</li>
				<li>
					<a href="#" className="hover:underline">
						Contact
					</a>
				</li>
			</ul>
		</footer>
	);
}
