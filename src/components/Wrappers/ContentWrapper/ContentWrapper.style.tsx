import styled from "styled-components"
import ContentWrapper from "./ContentWrapper"

export default styled(ContentWrapper)`
	height: 100%;
	color: ${({ theme }) => theme.textNormal.toHex()};
	background-color: ${({ theme }) => theme.backgroundDark.toHex()};
	display: flex;
	align-items: flex-start;
	width: 100%;
	padding: 2rem 2rem;
`
