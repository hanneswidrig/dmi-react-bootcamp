import { useState } from "react";

import reactLogo from "./assets/react.svg";
import "./App.css";

export function App() {
	const [count, setCount] = useState(0);

	return (
		<div className="flex flex-col justify-center gap-4">
			<div className="flex justify-center">
				<a href="https://vitejs.dev" target="_blank">
					<img src="/vite.svg" className="logo" alt="Vite logo" />
				</a>
				<a href="https://reactjs.org" target="_blank">
					<img src={reactLogo} className="logo react" alt="React logo" />
				</a>
			</div>
			<h1>Vite + React</h1>
			<div className="flex flex-col gap-4">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to see changes.
				</p>
			</div>
		</div>
	);
}
