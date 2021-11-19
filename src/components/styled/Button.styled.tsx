import styled from "styled-components"
import { IColors } from "../../res/styles/colors"
export const Button = styled.button`
	color: ${({ theme }: { theme: IColors }) => theme.textDark.toHex()};
	background-color: ${({ theme }) => theme.backgroundLight.toHex()};
	font-size: 3rem;
	border-radius: 20%;
	border: 2px ${({ theme }) => theme.border.toHex()} solid;
	padding: 0.3em 0.7em;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: ${({ theme }: { theme: IColors }) =>
			theme.backgroundLight.darken(0.1).toHex()};
	}
`
