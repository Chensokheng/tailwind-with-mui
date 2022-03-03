import React from "react";
import { StyledEngineProvider } from "@mui/material/styles";

export default function InjectTailwind({ children }) {
	return <StyledEngineProvider injectFirst>{children}</StyledEngineProvider>;
}
