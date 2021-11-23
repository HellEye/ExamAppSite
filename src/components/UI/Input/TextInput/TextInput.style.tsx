import styled from "styled-components"
import { IColors } from "../../../../res/styles/colors"
import TextInput from "./TextInput"
interface Props {
	theme: IColors
	fontSize?: string
}

export default styled(TextInput)<Props>`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-end;
	width: 100%;
	color: ${({ theme }) => theme.textDark.toHex()};
	position: relative;
	input {
		font-size: 1.1em;
		background-color: ${({ theme }) => theme.backgroundLight.toHex()};
		border-radius: 0.5em;
		padding: 0.3em 0.7em;
		color: inherit;
		border: 1px ${({ theme }) => theme.border.toHex()} solid;
	}
	textarea {
		font-size: 1em;
		background-color: ${({ theme }) => theme.backgroundLight.toHex()};
		border-radius: 0.5em;
		padding: 0.3em 0.7em;
		color: inherit;
		border: 1px ${({ theme }) => theme.border.toHex()} solid;
	}
	label {
		margin-right: 1em;
	}

	@keyframes spinner {
		to {
			transform: rotate(360deg);
		}
	}

	.spinner:before,
	& > svg {
		top: 50%;
		right: -2em;
		width: 20px;
		height: 20px;
		margin-top: -10px;
		margin-left: -10px;
		position: absolute;
	}

	.spinner:before {
		content: "";
		border-radius: 50%;
		border: 2px solid ${({ theme }) => theme.border.toHex()};
		border-top-color: #000;
		animation: spinner 0.6s linear infinite;
	}
`
