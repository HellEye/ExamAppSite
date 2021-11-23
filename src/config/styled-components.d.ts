import * as styledComponents from "styled-components"

import { IColors as ThemeInterface } from "../res/styles/colors"

const {
	default: styled,
	css,
	createGlobalStyle,
	keyframes,
	ThemeProvider,
	useTheme,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>

export { css, createGlobalStyle, keyframes, ThemeProvider, useTheme }
export default styled
