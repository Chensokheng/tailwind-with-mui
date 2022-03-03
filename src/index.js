import React from "react";
import ReactDOM from "react-dom";

import "./style/index.css";
import App from "./App";
import InjectTailwind from "./InjectTailwind";

ReactDOM.render(
	<React.StrictMode>
		<InjectTailwind>
			<App />
		</InjectTailwind>
	</React.StrictMode>,
	document.getElementById("root")
);
