import styled from "styled-components"
import { IColors } from "../../../res/styles/colors"

interface InputProps {
	theme?: IColors
	fontSize?: string
}

export default styled.input<InputProps>`
	background-color: ${({ theme }) => theme.backgroundLight.toHex()};
	color: ${({ theme }) => theme.textDark.toHex()};
	border-radius: 0.5em;
	padding: 0.3em 0.7em;
	border: 1px ${({ theme }) => theme.border.toHex()} solid;
	font-size: ${({ fontSize }) => fontSize || "1rem"};
`
