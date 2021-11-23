import { colord, Colord } from "colord"
import { DefaultTheme } from "styled-components"
type ThemeType = "light" | "dark"
export interface IColors extends DefaultTheme {
	type: ThemeType
	textNormal: Colord
	textDark: Colord
	textAccept: Colord
	textInfo: Colord
	textWarning: Colord
	textError: Colord
	border: Colord
	backgroundDark: Colord
	backgroundNormal: Colord
	backgroundLight: Colord
}
const colorsLight: IColors = {
	type: "light",
	textNormal: colord("#1F1F1F"),
	textDark: colord("#0A0A0A"),
	textAccept: colord("#209820"),
	textInfo: colord("#101066"),
	textError: colord("#881010"),
	textWarning: colord("#e3dd00"),
	border: colord("#444488"),
	backgroundDark: colord("#BBBBFF"),
	backgroundNormal: colord("#CCCCFF"),
	backgroundLight: colord("#DDDDFF"),
}
const colorsDark: IColors = {
	type: "dark",
	textNormal: colord("#EEEEEE"),
	textDark: colord("#DDDDDD"),
	textAccept: colord("#A4F4A4"),
	textInfo: colord("#BDBDEB"),
	textError: colord("#F4A4A4"),
	textWarning: colord("#f1c40f"),
	border: colord("#b0b0FF"),
	backgroundDark: colord("#02031B"),
	backgroundNormal: colord("#120E43"),
	backgroundLight: colord("#221A7F"),
}

export type Theme = "light" | "dark"

let colors: IColors =
	localStorage.getItem("theme") === "dark" ? colorsDark : colorsLight

const setColors = (theme: Theme) => {
	colors = theme === "dark" ? colorsDark : colorsLight
}

export { colors, setColors, colorsDark, colorsLight }
