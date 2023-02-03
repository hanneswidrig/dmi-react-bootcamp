import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import { Root } from "./Root";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Browse } from "./pages/Browse";
import { ProductDetail } from "./pages/ProductDetail";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		children: [
			{ path: "", element: <Home /> },
			{ path: "cart", element: <Cart /> },
			{ path: "browse/:type", element: <Browse /> },
			{ path: "menu/:productId", element: <ProductDetail /> },
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
