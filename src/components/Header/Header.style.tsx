import styled from "styled-components"
import Header from "./Header"
export default styled(Header)`
	background-color: ${(props) => props.theme.backgroundNormal.toHex()};
	color: ${(props) => props.theme.textNormal.toHex()};
	padding: 1rem;
	.logo {
		font-family: "Comforter Brush", cursive;
		font-size: 4rem;
	}
	border-bottom: 1px ${({ theme }) => theme.border.toHex()} solid;
`
