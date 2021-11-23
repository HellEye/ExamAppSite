import styled from "styled-components"
import { ToastContainer } from "react-toastify"
import { IColors } from "../../../res/styles/colors"
interface Props {
	theme: IColors
}
export default styled(ToastContainer)<Props>`
	.Toastify__toast-container {
	}
	.Toastify__toast {
		background-color: ${({ theme }) =>
			theme.backgroundNormal.darken(0.05).toHex()};
		border-radius: 0.5em;
		border: 2px ${({ theme }) => theme.border.toHex()} solid;
		color: ${({ theme }) => theme.textNormal.toHex()};
	}
	.Toastify__toast-body {
	}
	.Toastify__progress-bar {
	}
	.Toastify__close-button {
		color: ${({ theme }) => theme.textNormal.toHex()};
	}
	.Toastify__progress-bar--warning {
		background-color: ${({ theme }) => theme.textWarning.toHex()};
	}
`
