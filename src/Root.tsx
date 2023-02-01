import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Root() {
	return (
		<div className="m-8 flex max-w-7xl flex-col">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
