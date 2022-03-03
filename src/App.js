import React from "react";
import Button from "@mui/material/Button";
import { CssBaseline } from "@mui/material";

export default function App() {
	return (
		<>
			<CssBaseline />
			<div className="bg-black">
				<Button variant="contained" className="bg-blue-500 m-2">
					Contained
				</Button>
				<h1 className="text-white">Hello world</h1>
			</div>
		</>
	);
}
