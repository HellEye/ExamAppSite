import styled from "styled-components"
import { IColors } from "../../../res/styles/colors"

interface ButtonProps {
	theme?: IColors
	fontSize?: string
}

export const Button = styled.button<ButtonProps>`
	color: ${({ theme }) => theme.textDark.toHex()};
	background-color: ${({ theme }) => theme.backgroundLight.toHex()};
	font-size: ${({ fontSize }) => fontSize || "1rem"};
	border-radius: 0.5em;
	border: 2px ${({ theme }) => theme.border.toHex()} solid;
	padding: 0.3em 0.7em;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: ${({ theme }: { theme: IColors }) =>
			theme.backgroundLight.darken(0.1).toHex()};
	}

	&:active {
		background-color: ${({ theme }: { theme: IColors }) =>
			theme.backgroundLight.darken(0.2).toHex()};
	}
`
