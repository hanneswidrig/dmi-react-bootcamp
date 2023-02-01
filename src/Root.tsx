import { Outlet } from "react-router-dom";

import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

export function Root() {
	return (
		<div className="my-0 mx-auto flex max-w-7xl flex-col p-8">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
}
