import styled from "styled-components"
import LandingPage from "./LandingPage"

export default styled(LandingPage)`
	height: 100%;
	background-color: ${({ theme }) => theme.backgroundDark.toHex()};
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-template-rows: 1fr 1fr 1fr;

	.buttonWrapper {
		grid-row: 2;
		grid-column: 2;
		display: flex;
		align-items: center;
		justify-content: center;
	}
`
