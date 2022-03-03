import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@mui/material/styles";

import "./style/index.css";
import App from "./App";
import InjectTailwind from "./InjectTailwind";
import theme from "./config/theme";

ReactDOM.render(
	<React.StrictMode>
		<InjectTailwind>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</InjectTailwind>
	</React.StrictMode>,
	document.getElementById("root")
);
