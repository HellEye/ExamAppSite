import styled from "styled-components"
import Login from "./Login"

export default styled(Login)`
	& > * {
		margin-bottom: 1em;
	}

	.actionButtons {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
	}
`
