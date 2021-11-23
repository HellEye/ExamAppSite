import styled from "styled-components"
import LandingPage from "./LandingPage"

export default styled(LandingPage)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	& > * {
		margin-bottom: 1em;
	}
`
