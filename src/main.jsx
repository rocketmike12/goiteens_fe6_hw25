import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
	<StrictMode>
		<BrowserRouter basename="/goiteens_fe6_hw25/">
			<App />
		</BrowserRouter>
	</StrictMode>
);
